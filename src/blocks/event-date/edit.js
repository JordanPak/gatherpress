/**
 * External dependencies.
 */
import moment from 'moment';
import clsx from 'clsx';

/**
 * WordPress dependencies.
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalVStack as VStack,
	PanelBody,
	RadioControl,
	SelectControl,
	Spinner,
	TextControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies.
 */
import {
	convertPHPToMomentFormat,
	getTimezone,
	getUtcOffset,
	removeNonTimePHPFormatChars,
} from '../../helpers/datetime';
import DateTimeRange from '../../components/DateTimeRange';
import { getFromGlobal } from '../../helpers/globals';
import { isEventPostType } from '../../helpers/event';

const globalDateFormat = getFromGlobal('settings.dateFormat');
const globalTimeFormat = getFromGlobal('settings.timeFormat');
const globalShowTimezone = getFromGlobal('settings.showTimezone');
const defaultFormat = `${globalDateFormat} ${globalTimeFormat}`;

/**
 * Similar to get_display_datetime method in class-event.php.
 *
 * @param {string} dateTimeStart
 * @param {string} dateTimeEnd
 * @param {string} timezone
 * @param {string} startFormat
 * @param {string} endFormat
 * @param {string} separator
 * @param {string} showTimezone
 * @return {string} Displayed date.
 */
const displayDateTime = (
	dateTimeStart,
	dateTimeEnd,
	timezone,
	startFormat,
	endFormat,
	separator,
	showTimezone
) => {
	timezone = getTimezone(timezone);
	let sameStartEndDay = false;

	// Check for default formatting with same event day before applying
	// attribute-specific formats.
	if (dateTimeStart && dateTimeEnd) {
		const sameDayFormat = convertPHPToMomentFormat(globalDateFormat);
		sameStartEndDay =
			moment.tz(dateTimeStart, timezone).format(sameDayFormat) ===
			moment.tz(dateTimeEnd, timezone).format(sameDayFormat);
	}

	const parts = [];

	// Add start date/time.
	if (dateTimeStart) {
		startFormat = convertPHPToMomentFormat(
			startFormat ? startFormat : defaultFormat
		);
		parts.push(moment.tz(dateTimeStart, timezone).format(startFormat));
	}

	// Add separator if start + end date/time(s).
	if (dateTimeStart && dateTimeEnd) {
		parts.push(separator);
	}

	// Add end date/time.
	if (dateTimeEnd) {
		// Fall formatting back to default.
		endFormat = endFormat ? endFormat : defaultFormat;

		endFormat = convertPHPToMomentFormat(
			// Remove non-time characters from PHP date format if start and end
			// are on the same day.
			sameStartEndDay ? removeNonTimePHPFormatChars(endFormat) : endFormat
		);
		parts.push(moment.tz(dateTimeEnd, timezone).format(endFormat));
	}

	// Add timezone.
	if (showTimezone ? 'yes' === showTimezone : globalShowTimezone) {
		parts.push(
			moment
				.tz(dateTimeEnd ? dateTimeEnd : dateTimeStart, timezone)
				.format('z')
		);
	}

	// Add UTC offset if GMT (invalid site timezone).
	parts.push(getUtcOffset(timezone));

	// The filter removes empty values.
	return parts.filter((part) => part).join(' ');
};

/**
 * Edit component for the GatherPress Event Date block.
 *
 * This component represents the editable view of the GatherPress Event Date block
 * in the WordPress block editor. It manages the state of the start and end date,
 * time, and timezone for the block, and renders the user interface accordingly.
 * The component includes a BlockControls toolbar, displays the formatted date and
 * time, and provides controls for editing the date and time range via the
 * DateTimeRange component within InspectorControls.
 *
 * @since 1.0.0
 *
 * @param {Object}   root0               The props passed to the Edit component.
 * @param {Object}   root0.attributes    The block attributes.
 * @param {Object}   root0.context       Block context data containing postId and event info.
 * @param {Function} root0.setAttributes Function to set block attributes.
 *
 * @return {JSX.Element} The rendered Edit component for the GatherPress Event Date block.
 *
 * @see {@link DateTimeRange} - Component for editing date and time range.
 * @see {@link AlignmentToolbar} - Toolbar for text alignment control.
 * @see {@link useBlockProps} - Custom hook for block props.
 * @see {@link displayDateTime} - Function for formatting and displaying date and time.
 */
const Edit = ({ attributes, setAttributes, context }) => {
	const {
		textAlign,
		displayType,
		startDateFormat,
		endDateFormat,
		separator,
		showTimezone,
	} = attributes;
	const blockProps = useBlockProps({
		className: clsx({
			[`has-text-align-${textAlign}`]: textAlign,
		}),
	});
	const postId = attributes?.postId ?? context?.postId ?? null;

	const { dateTimeStart, dateTimeEnd, timezone } = useSelect(
		(select) => {
			if (!postId) {
				return {
					dateTimeStart: undefined,
					dateTimeEnd: undefined,
					timezone: undefined,
				};
			}

			if (isEventPostType()) {
				return {
					dateTimeStart: select(
						'gatherpress/datetime'
					).getDateTimeStart(),
					dateTimeEnd: select(
						'gatherpress/datetime'
					).getDateTimeEnd(),
					timezone: select('gatherpress/datetime').getTimezone(),
				};
			}

			const meta = select('core').getEntityRecord(
				'postType',
				'gatherpress_event',
				postId
			)?.meta;

			return {
				dateTimeStart: meta?.gatherpress_datetime_start,
				dateTimeEnd: meta?.gatherpress_datetime_end,
				timezone: meta?.gatherpress_timezone,
			};
		},
		[postId]
	);

	if (postId && (!dateTimeStart || !dateTimeEnd || !timezone)) {
		return (
			<div {...blockProps}>
				<Spinner />
			</div>
		);
	}

	const showStartTime = ['start', 'both'].includes(displayType);
	const showEndTime = ['end', 'both'].includes(displayType);

	return (
		<div {...blockProps}>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(newAlign) =>
						setAttributes({ textAlign: newAlign })
					}
				/>
			</BlockControls>
			{displayDateTime(
				showStartTime ? dateTimeStart : null,
				showEndTime ? dateTimeEnd : null,
				timezone,
				startDateFormat,
				endDateFormat,
				separator,
				showTimezone
			)}
			{isEventPostType() && (
				<InspectorControls>
					<PanelBody>
						<VStack spacing={4}>
							<DateTimeRange />
						</VStack>
						<div style={{ height: '1rem' }} />
						<RadioControl
							label={__('Display', 'gatherpress')}
							selected={displayType}
							options={[
								{
									label: __(
										'Start and end date',
										'getherpress'
									),
									value: 'both',
								},
								{
									label: __('Start date only', 'gatherpress'),
									value: 'start',
								},
								{
									label: __('End date only', 'gatherpress'),
									value: 'end',
								},
							]}
							onChange={(value) =>
								setAttributes({ displayType: value })
							}
						/>
						{'both' === displayType && (
							<TextControl
								label={__('Separator', 'gatherpress')}
								value={separator}
								placeholder={__('to', 'gatherpress')}
								onChange={(value) =>
									setAttributes({ separator: value })
								}
							/>
						)}
						{showStartTime && (
							<TextControl
								label={__('Start date format', 'gatherpress')}
								value={startDateFormat}
								placeholder={`${globalDateFormat} ${globalTimeFormat}`}
								onChange={(value) =>
									setAttributes({ startDateFormat: value })
								}
							/>
						)}
						{showEndTime && (
							<TextControl
								label={__('End date format', 'gatherpress')}
								value={endDateFormat}
								placeholder={`${globalDateFormat} ${globalTimeFormat}`}
								onChange={(value) =>
									setAttributes({ endDateFormat: value })
								}
							/>
						)}
						<p className="components-base-control__help">
							<a
								href="https://wordpress.org/documentation/article/customize-date-and-time-format/"
								target="_blank"
								rel="noreferrer"
							>
								{__(
									'Date/time formatting documentation',
									'gatherpress'
								)}
							</a>
						</p>
						<SelectControl
							label={__('Show time zone', 'gatherpress')}
							value={showTimezone}
							options={[
								{
									label: sprintf(
										/* translators: %s: Plugin "show timezone" setting */
										__(
											'%s (plugin setting)',
											'gatherpress'
										),
										globalShowTimezone
											? __('Yes', 'gatherpress')
											: __('No', 'gatherpress')
									),
									value: '',
								},
								{
									label: __('Yes', 'gatherpress'),
									value: 'yes',
								},
								{
									label: __('No', 'gatherpress'),
									value: 'no',
								},
							]}
							onChange={(value) =>
								setAttributes({ showTimezone: value })
							}
						/>
					</PanelBody>
				</InspectorControls>
			)}
		</div>
	);
};

export default Edit;

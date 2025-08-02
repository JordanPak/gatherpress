<?php
/**
 * Handles iCalendar feeds in GatherPress.
 *
 * This class is responsible for generating iCalendar data for event(s).
 *
 * @package GatherPress\Core
 * @since 1.0.0
 */

namespace GatherPress\Core\Feeds;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; // @codeCoverageIgnore

/**
 * Class ICalendar.
 *
 * Represents individual events within the GatherPress plugin and provides event-related functionality.
 *
 * @since 1.0.0
 */
class ICalendar extends Feed {

	/**
	 * Feed name.
	 *
	 * Used for routing. Ex: rss2, icalendar.
	 *
	 * @var string
	 */
	const NAME = 'ical';
}

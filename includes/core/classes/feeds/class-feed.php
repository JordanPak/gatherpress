<?php
/**
 * Handles the setup and management of feeds in GatherPress.
 *
 * This class is responsible for generating syndication data for feed and calendar consumers.
 *
 * @package GatherPress\Core
 * @since 1.0.0
 */

namespace GatherPress\Core\Feeds;

use GatherPress\Core\Traits\Singleton;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; // @codeCoverageIgnore

/**
 * Class Feed.
 *
 * Represents a feed of syndication data for events.
 *
 * @since 1.0.0
 */
abstract class Feed {
	use Singleton;

	/**
	 * Feed name.
	 *
	 * Used for routing. Ex: rss2, icalendar.
	 *
	 * @var string
	 */
	const NAME = 'feed-name';

	/**
	 * Request parameter
	 *
	 * @var string
	 */
	const PARAM = 'gatherpress-feed';

	/**
	 * Class constructor.
	 *
	 * This method initializes the object and sets up necessary hooks.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->setup_hooks();
	}

	/**
	 * Set up hooks for various purposes.
	 *
	 * This method adds hooks for different purposes as needed.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	protected function setup_hooks(): void {
		add_action( 'wp', array( $this, 'do_param_check' ) );
	}

	public function do_param_check(): void {

		if (
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			isset( $_GET[ static::PARAM ] )
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			&& static::NAME === sanitize_text_field( wp_unslash( $_GET[ static::PARAM ] ) )
		) {
			echo '<html><head><title>ICAL FEED!</title></head><body>BIGTIME WHATEVER DUDE</body></html>';
			exit();
		}
	}
}

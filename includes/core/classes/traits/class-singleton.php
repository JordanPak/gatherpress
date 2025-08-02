<?php
/**
 * The Singleton trait defines a method for ensuring a class has only one instance.
 *
 * This trait is responsible for implementing the Singleton design pattern in classes
 * that need to have a single instance throughout the application.
 *
 * @package GatherPress\Core
 * @since 1.0.0
 */

namespace GatherPress\Core\Traits;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; // @codeCoverageIgnore

/**
 * Singleton Trait.
 *
 * A reusable trait for implementing the singleton design pattern in PHP classes.
 *
 * @since 1.0.0
 */
trait Singleton {

	/**
	 * The instance
	 */
	// phpcs:ignore Squiz.Commenting.VariableComment.MissingVar, Squiz.Commenting.VariableComment.Missing
	protected static $instance = array();

	/**
	 * Get the instance of the Singleton class.
	 *
	 * If an instance does not exist, it creates one; otherwise, it returns the existing instance.
	 *
	 * @since 1.0.0
	 *
	 * @return self The instance of the class.
	 */
	final public static function get_instance() {

		// Allow for compatibility with sub-classes (those extending something
		// that uses this trait).
		$called_class = get_called_class();

		if ( ! isset( static::$instance[ $called_class ] ) ) {
			static::$instance[ $called_class ] = new $called_class();
		}

		return static::$instance[ $called_class ];
	}
}

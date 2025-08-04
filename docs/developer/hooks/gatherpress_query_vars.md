# gatherpress_query_vars


This filter is documented in includes/query-loop.php

## Auto-generated Example

```php
add_filter(
   'gatherpress_query_vars',
    function(
        array $query_args,
        array $block_query,
        GatherPress\boolean $inherited,
         = null
    ) {
        // Your code here.
        return $query_args;
    },
    10,
    3
);
```

## Parameters

- *`array`* `$query_args` Arguments to be passed to WP_Query.
- *`array`* `$block_query` The query attribute retrieved from the block.
- *`GatherPress\boolean`* `$inherited` Whether the query is being inherited.
- ``

## Returns

`array` $filtered_query_args Final arguments list.

## Files

- [includes/core/classes/blocks/class-event-query.php:122](https://github.com/GatherPress/gatherpress/blob/develop/includes/core/classes/blocks/class-event-query.php#L122)
```php
apply_filters(
					'gatherpress_query_vars',
					$query_args,
					$parsed_block['attrs']['query'],
					true,
				)
```

- [includes/core/classes/blocks/class-event-query.php:207](https://github.com/GatherPress/gatherpress/blob/develop/includes/core/classes/blocks/class-event-query.php#L207)
```php
apply_filters(
			'gatherpress_query_vars',
			$query_args,
			$block_query,
			false
		)
```

- [includes/core/classes/blocks/class-event-query.php:257](https://github.com/GatherPress/gatherpress/blob/develop/includes/core/classes/blocks/class-event-query.php#L257)
```php
apply_filters(
			'gatherpress_query_vars',
			$custom_args,
			$request->get_params(),
			false,
		)
```



[← All Hooks](Hooks)

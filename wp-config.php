<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'carpet_oasis');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'C5LO`6sZUyHprB6YFMt;DT{:s$J!+U@D}b0-+z,?_%T#lxb|K}m]HijrYR*nsEnJ');
define('SECURE_AUTH_KEY',  '*7II^w] /&X%OFOtsK*^lLQR+Nl&K4XVVyMY@;m:y8PY%Xq6L#YojKmBwc-AlrRC');
define('LOGGED_IN_KEY',    ':*.oQ{zu 5.^,UOy5LgQjAm)z![J((.3;`A=)[0EyXAc)?VJwTX%{?@UOs%dn22r');
define('NONCE_KEY',        'hf4;<ii|8?#%rV]89u^7 xb~s|W/{0j~xFCIn@Gb64Juv<qxT5uf+AQvE9d)}H6d');
define('AUTH_SALT',        'bwKX7HV0&exT {a8a:R0{1FWim2+=Lu@X!}T2W5qN#wXo<l^>S @ddJH1i]0B^ra');
define('SECURE_AUTH_SALT', 'vgD[<w`!eM%:B/i ?4Ws4@:AL0;{ b}MP?HNlR<w}:68P,PVk*#ReI08@BLev5jp');
define('LOGGED_IN_SALT',   '-8uNBA59P[3JZml3W.o%B$alIv~R<CN%j;&Vf1-zk:0_ Wf>(-1P,+}%8Vw0yVy#');
define('NONCE_SALT',       '^m8`uGb~(=>5ggo}0jw)TjA3Syd?x2]]tIBlK~WU,{5VMMaKD`/mRt^#UWH?BMyd');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

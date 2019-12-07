<?php 
add_theme_support( 'post-thumbnails' );
function cut_string($string, $characters){
    return wp_trim_words($string, $characters);
}

add_theme_support( 'post-thumbnails' );

// Register Style
function all_styles() {

	wp_register_style( 'fontawesome', get_template_directory_uri() . '/libs/fontawesome/all.min.css', false, false );
	wp_enqueue_style( 'fontawesome' );

	wp_register_style( 'style', get_template_directory_uri() . '/style.css', false, false );
	wp_enqueue_style( 'style' );

}
add_action( 'wp_enqueue_scripts', 'all_styles' );

// Register Script
function all_scripts() {

	wp_register_script( 'jquery_3', get_template_directory_uri() . '/assets/libs/jquery/jquery-3.4.1.min.js', false, false, true );
	wp_enqueue_script( 'jquery_3' );

	wp_register_script( 'parallax', get_template_directory_uri() . '/libs/parallax/parallax.min.js', array('jquery_3'), false, true );
	wp_enqueue_script( 'parallax' );

	wp_register_script( 'scripts', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery_3'), false, true );
	wp_enqueue_script( 'scripts' );

}
add_action( 'wp_enqueue_scripts', 'all_scripts' );
?>
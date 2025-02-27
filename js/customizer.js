/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

    // Blog title and description.
    wp.customize( 'blogname', function( value ) {
        value.bind( function( to ) {
            $( '.blog-title a' ).text( to );
        } );
    } );
    wp.customize( 'blogdescription', function( value ) {
        value.bind( function( to ) {
            $( '.blog-description' ).text( to );
        } );
    } );
    

    // Header text colour
    wp.customize( 'header_textcolor', function( value ) {
        value.bind( function( to ) {
            if ( 'blank' === to || '' === to || false === to) {
                $( 'header .blog-title a, header .blog-description, .social-icons a' ).css( {
                    'color' : 'inherit'
                } );
            } else {
                $( 'header .blog-title a, header .blog-description, .social-icons a' ).css( {
                    'color': to
                } );
            }
        } );
    } );
    // Hover colour
    wp.customize( 'casper_hover_color', function( value ) {
        value.bind( function( to ) {
            $( 'a:hover, header .blog-title a:hover, header .social-icons a:hover' ).css( 'color', to );
        } );
    });
    // Home Menu colour
    wp.customize( 'casper_home_menu_color', function( value ) {
        value.bind( function( to ) {
            $( '.main-navigation a' ).css( 'color', to );
        } );
    });
    // Menu colour
    wp.customize( 'casper_menu_color', function( value ) {
        value.bind( function( to ) {
            $( '.main-navigation a' ).css( 'color', to );
        } );
    });
    

    // Other Page Header text colour
    wp.customize( 'casper_header_textcolor', function( value ) {
        value.bind( function( to ) {
            if ( 'blank' === to || '' === to || false === to ) {
                $( ' header .blog-title a,  header .blog-description,  .social-icons a' ).css( {
                    'color': 'inherit'
                } );
            } else {
                $( ' header .blog-title a,  header .blog-description,  .social-icons a' ).css( {
                    'color': to
                } );
            }
        } );
    } );

    // Header Colour
    wp.customize( 'casper_header_color', function( value ) {
        value.bind( function( to ) {
            $( '.site-head' ).css( 'background-color', to );
        } );
    });

    // Link colour
    wp.customize( 'casper_link_color', function( value ) {
        value.bind( function( to ) {
            $( 'section a' ).css( 'color', to );
        } );
    });

    // Circle logo
    wp.customize( 'casper_logo_circle', function( value ) {
        value.bind( function( to ) {
            if ( '' === to ) {
                $( '.blog-logo img' ).css( { '-webkit-border-radius': '0',
                                            '-moz-border-radius': '0',
                                            'border-radius': '0'
                } );
            } else {
                $( '.blog-logo img' ).css( { '-webkit-border-radius': '50%',
                                            '-moz-border-radius': '50%',
                                            'border-radius': '50%'
                } );
            }
        } );
    });

    // Logo frame
    wp.customize( 'casper_logo_frame', function( value ) {
        value.bind( function( to ) {
            if ( '' === to ) {
                $( '.blog-logo img' ).css( { 'border': 'none',
                                            '-webkit-box-shadow': 'none',
                                            '-moz-box-shadow': 'none',
                                            'box-shadow': 'none'
                } );
            } else {
                $( '.blog-logo img' ).css( { 'border': '3px solid white',
                                            '-webkit-box-shadow': '0 1px 1px rgba(0,0,0,0.3)',
                                            '-moz-box-shadow': '0 1px 1px rgba(0,0,0,0.3)',
                                            'box-shadow': '0 1px 1px rgba(0,0,0,0.3);} )'
                } );
            }
        });
    });

    // Footer information
    wp.customize( 'casper_custom_footer', function( value ) {
        value.bind( function( to ) {
            if ( '' === to ) {
                $( '.copyright' ).html( '<a href="https://github.com/lacymorrow/casper/" rel="home">Casper</a> by Lacy Morrow' );
            } else {
                $( '.copyright' ).html( to );
            }
        } );
    });
} )( jQuery );

<?php 
$post = get_post();
?>

<div id="containerPost">
    <div class="padding">

        <?php include 'volver.php' ?>

        <div class="imagePost" data-parallax="scroll" data-image-src="<?php echo get_the_post_thumbnail_url( $post->ID, "large" ) ?>"></div>

        <div class="header">

            <div class="category">
                <a href="<?php echo get_category_link(get_the_category($post->ID)[0]) ?>">
                    <?php echo get_the_category($post->ID)[0]->cat_name  ?>
                </a>
            </div>

            <div class="date">
                <?php echo get_the_date() ?>
            </div>

        </div>

        <h2><?php echo $post->post_title ?></h2>

        <div class="postContent">
            <?php echo $post->post_content ?>
        </div>

    </div>
</div>

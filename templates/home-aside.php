<?php 
$info = get_post(11);
?>
<aside>
    <div class="padding">
        <h2>Jonathan Schell</h2>
        <div class="image" style="background-image: url(<?php echo get_the_post_thumbnail_url( $info->ID, "medium" ) ?>)"></div>
        <h3><?php echo $info->post_title ?></h3>
        <?php echo $info->post_content ?>
        <hr>
    </div>
</aside>
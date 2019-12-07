<?php 
$category = get_the_category();
$category_id = $category[0]->term_id;

$posts = get_posts(array(
    "posts_type"            =>          "posts",
    "post_status"           =>          "publish",
    "category"              =>          $category_id
));
?>

<div id="containerCategory">
    <div class="padding">

        <?php include 'volver.php' ?>

        <h2><?php echo $category[0]->name ?></h2>

        <div class="grid">

            <?php 
            foreach ($posts as $key => $value) {
                $category = get_the_category($value->ID);
                ?>
                <div class="item category">
                    <div class="content">
                        <div class="header">
                            <div class="category">
                                <a href="<?php echo get_category_link($category[0]) ?>">
                                    <?php echo $category[0]->cat_name ?>
                                </a>
                                
                            </div>
                            <div class="date"><?php echo get_the_date() ?></div>
                        </div>
                        <div class="image" style="background-image: url(<?php echo get_the_post_thumbnail_url( $value->ID, "medium" ) ?>)"></div>
                        <div class="title">
                            <h3>
                                <a href="<?php echo get_permalink($value->ID) ?>"><?php echo $value->post_title ?></a>
                            </h3>
                        </div>
                        <div class="body">
                            <?php echo get_field("descripcion_corta", $value->ID)  ?>
                        </div>
                    </div>
                </div>
                <?php
            }
            ?>

        </div>

    </div>
</div>
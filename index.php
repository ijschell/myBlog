<?php 
include 'header.php';
?>
<section>

    <?php
    if(is_home()){
        include 'templates/home-posts.php';
    }elseif(is_category()){
        include 'templates/category.php';
    }else{
        include 'templates/post.php';
    }
    ?>

    <?php include 'templates/home-aside.php' ?>

</section>
<?php
include 'footer.php';
?>
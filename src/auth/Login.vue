<template>
    <div class="login" id="login">
        <div class="container">
            <!--Start Intro-->
        <div class="intro">
            <div class="container">
                <div class="row">
                    <div class="col first-col col-12 col-xl-6 col-md-6">
                        <div class="brand">
                            <a href="index.html"><i class="fa fa-connectdevelop"></i></a>
                            <h1>Student Community</h1>
                        </div>
                        <div class="small-quote">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iste corporis inventore id delectus repellendus, similique voluptatibus.</p>
                        </div>
                    </div>
                    <div class="col second-col col-12 col-xl-6 col-md-6"> 
                        <h3 class="text-center">Welcome To</h3>
                        <div class="brand">
                            <a href="index.html"><i class="fa fa-connectdevelop"></i></a>
                            <h2>Student Community</h2>
                        </div>
                        <div class="small-quote">
                            <p>Log in to know what's new in your community.</p>
                        </div>

                        <div class="form">
                            <form action="/" method="POST">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email" name="email">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password" name="password">
                                </div>
                                <button type="submit" class="btn" name="sign-in">Login</button>
                            </form>
                        </div>
                        <div class="create-acc">
                            <span class="line"></span>
                            <span> or </span>
                            <span class="line"></span>
                        </div>

                        <h6>Don't have an account? <a href="./Registration">Sign Up Now</a></h6>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    
}
</script>




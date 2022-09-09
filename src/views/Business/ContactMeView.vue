<template>
<div class="holder d-flex flex-column justify-content-center align-content-center  ">
  <form  action="https://formspree.io/f/mgeqorlj"
  method="POST" class="d-flex flex-column justify-content-center align-content-center ">
  <input type="text" name="fullname" id="fullname" placeholder="Please enter your fullname" required>
  <input type="text" name="fullname" id="fullname" placeholder="Please enter your email address" required>
  <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Message" required></textarea>
  <button type="submit">Send a message</button>
  </form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.holder{
    height:100vh;
    
}

input{
    background-color:#C4FCEF;
}

textarea{
      background-color:#C4FCEF;
}



</style>
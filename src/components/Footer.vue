<template>
  <div>
    <footer id="footer">
      <div class="work-links">
        <a href="https://github.com/MikaRinquest" target="_blank"
          ><i class="bx bxl-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/mika-rinquest-975890237/"
          target="_blank"
          ><i class="bx bxl-linkedin-square"></i
        ></a>
      </div>
      <div class="contact">
        <p class="heading">Contact Me:</p>
        <p class="subheading">Email:</p>
        <p>rinquestmika@gmail.com</p>
        <p class="subheading">Phone number:</p>
        <p>081 707 9992</p>
      </div>
      <div class="copyright">
        <i class="bx bxs-copyright">MikaRinquest</i>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
p {
  margin: 0;
}

#footer {
  background-color: #383838;
  color: #dbdbdb;
  height: 25vh;
}

.work-links {
  padding-top: 5px;
  padding-bottom: 5px;
}

.bx {
  font-size: 15px;
}

.bxl-github {
  color: black;
  font-size: 25px;
}

.bxl-linkedin-square {
  color: #0e76a8;
  font-size: 25px;
}

.heading {
  font-size: 16px;
}

.subheading {
  text-decoration: underline;
  font-size: 14px;
}

.contact {
  font-size: 13px;
  margin-bottom: 5px;
}
</style>

<template>
  <div>

    <!-- Section 1: Give a helping hand -->
    <div class="box">
      <h1>Give a <span>Helping Hand</span></h1>
      <div class="content">
        <p>Welcome to our social welfare website. By obtaining gifts of food and clothing and giving them to people in need, we hope to close the gap between the rich and the poor. No one should go hungry or lack for the necessities of life, and that is the society we want to build. We think that if we work together, we can build a society where everyone has access to the needs of life and the opportunity to lead satisfying lives.</p>
        <a href="#" class="btn">Learn More</a>
      </div>
      <img src="image/mainimg.png" alt="" class="image-box">
    </div>

    <!-- Section 2: What We Do -->
    

    <div class="container">
      <form @submit.prevent="submitTheme" id="contact" action="" method="post">
        <h3>Contribute to Us</h3>
        <h4>Helping Hand</h4>
        <fieldset>
          <input v-model="name" placeholder="Your name" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
          <input v-model="phoneNumber" placeholder="Your Phone Number" type="tel" tabindex="3" required>
        </fieldset>
        <fieldset>
          <input v-model="contribution" placeholder="What you want to contribute" type="text" tabindex="4" required>
        </fieldset>
        <fieldset>
          <textarea v-model="suggestions" placeholder="Type your suggestions here...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>



    

    <!-- Section 3: Be a Volunteer -->
    <div class="box">
      <h1>Be a Volunteer</h1>
      <div class="content">
        <p>We are inviting people to volunteer for our community if they are passionate about having a good impact on their communities. As a volunteer, you will have the chance to devote your time, talents, and efforts to assisting those in need and changing the world for the better.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSemP2P5WB-kj1VKg0OSCqVZnGSYvJxSEVgwoCp99bvY-iklYQ/viewform?usp=sf_link" class="btn">Be with Us</a>
      </div>
    </div>

    

  </div>
</template>

<script>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '@/firebase'; // Adjust the path

export default {
  name: 'ThemePage',
  data() {
    const name = ref('');
    const phoneNumber = ref('');
    const contribution = ref('');
    const suggestions = ref('');

    return {
      name,
      phoneNumber,
      contribution,
      suggestions,
    };
  },
  methods: {
    async submitTheme() {
      // Validate form data (optional)
      if (!this.name || !this.phoneNumber || !this.contribution || !this.suggestions) {
        console.error('Please fill in all fields.');
        return;
      }

      const themeData = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        contribution: this.contribution,
        suggestions: this.suggestions,
        // Add more fields as needed
      };

      try {
        // Add a new document with a generated ID to the "themes" collection
        const docRef = await addDoc(collection(firestore, 'themes'), themeData);
        console.log('Theme submitted with ID:', docRef.id);

        // Optionally, reset the form or provide user feedback
        this.name = '';
        this.phoneNumber = '';
        this.contribution = '';
        this.suggestions = '';
      } catch (error) {
        console.error('Error submitting theme:', error);
        // Add logic for displaying an error message to the user if needed
      }
    },
  },
};
</script>



<style scoped>
  /* Box styles */
  .box {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  span{
    color: #8F00FF;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

* {
	margin:0;
	padding:0;
	box-sizing:border-box;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	-webkit-font-smoothing:antialiased;
	-moz-font-smoothing:antialiased;
	-o-font-smoothing:antialiased;
	font-smoothing:antialiased;
	text-rendering:optimizeLegibility;
}

body {
	font-family:"Open Sans", Helvetica, Arial, sans-serif;
	font-weight:300;
	font-size: 12px;
	line-height:30px;
	color:#777;
	background:#0CF;
}

.container {
	max-width:400px;
	width:100%;
	margin:0 auto;
	position:relative;
}

#contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea, #contact button[type="submit"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }

#contact {
	background:#F9F9F9;
	padding:25px;
	margin:50px 0;
}

#contact h3 {
	color: #F96;
	display: block;
	font-size: 30px;
	font-weight: 400;
}

#contact h4 {
	margin:5px 0 15px;
	display:block;
	font-size:13px;
}

fieldset {
	border: medium none !important;
	margin: 0 0 10px;
	min-width: 100%;
	padding: 0;
	width: 100%;
}

#contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea {
	width:100%;
	border:1px solid #CCC;
	background:#FFF;
	margin:0 0 5px;
	padding:10px;
}

#contact input[type="text"]:hover, #contact input[type="email"]:hover, #contact input[type="tel"]:hover, #contact input[type="url"]:hover, #contact textarea:hover {
	-webkit-transition:border-color 0.3s ease-in-out;
	-moz-transition:border-color 0.3s ease-in-out;
	transition:border-color 0.3s ease-in-out;
	border:1px solid #AAA;
}

#contact textarea {
	height:100px;
	max-width:100%;
  resize:none;
}

#contact button[type="submit"] {
	cursor:pointer;
	width:100%;
	border:none;
	background:#0CF;
	color:#FFF;
	margin:0 0 5px;
	padding:10px;
	font-size:15px;
}

#contact button[type="submit"]:hover {
	background:#09C;
	-webkit-transition:background 0.3s ease-in-out;
	-moz-transition:background 0.3s ease-in-out;
	transition:background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }

#contact input:focus, #contact textarea:focus {
	outline:0;
	border:1px solid #999;
}
::-webkit-input-placeholder {
 color:#888;
}
:-moz-placeholder {
 color:#888;
}
::-moz-placeholder {
 color:#888;
}
:-ms-input-placeholder {
 color:#888;
}

  .content {
    font-size: 16px;
    color: #555;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #8F00FF;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #5E2CAC;
  }

  /* Image styles */
  .image-box, .img {
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
  }

  /* Card styles */
  .card {
    margin-top: 10px;
    overflow: hidden;
    border-radius: .5rem;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }

  .card:hover {
    transform: scale(1.02);
  }

  .card img {
    height: 25rem;
    width: 100%;
    object-fit: cover;
  }

  .card .content {
    padding: 2rem;
  }

  .card .content .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }

  .card .content .icons a {
    color: #8F00FF;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s;
  }

  .card .content .icons a:hover {
    color: #5E2CAC;
  }

  .card .content .icons a i {
    color: #8F00FF;
    padding-right: .5rem;
  }

  .card .content h3 {
    line-height: 1.8;
    color: #8F00FF;
    font-size: 2.2rem;
    padding: .5rem 0;
  }

  .card .content p {
    line-height: 1.8;
    color: #333;
    font-size: 1.5rem;
    padding: .5rem 0;
  }
  *{
  margin:0;
  padding:0;
  overflow-x,overflow-y:hidden;
  font-face: "verdana","sans-serif";
  box-sizing: border-box;
}

body{
  background:#E6E8E1;
}

.box{
  height: 400px;
  width: 400px;
  margin: 20px auto;
  margin-top:20px;
  border-radius:15px;
  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
 

filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9bc635', endColorstr='#c0ea67',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>

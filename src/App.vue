<template>
  <v-app>
    <v-content class="background_image">
      <v-layout wrap>
        <v-flex xs12  justify-center fill-height align-center style="min-height:80px">
          <v-container grid-list-md justify-center fill-height align-center> <!-- style="background-color: white;"-->
          <v-layout wrap>
            <v-flex xs12>
              <v-layout wrap >
                <v-flex xs12 style="margin-left:28px;margin-right:80px;padding-top:10px">
                  <div style="vertical-align: middle">
                    <span class="header_span" style="font-size:45px;vertical-align: middle; font-family: sofia-pro, sans-serif; font-weight: 700; font-style: normal;        ">
                      COGNITUS
                    </span>
                    <img src="./assets/COGNITUS_NUR_LOGO_WEISS.svg" style="height:auto; width:100px;vertical-align: middle"/>
                    <span class="header_span" style="font-size:25px;vertical-align: middle" >
                      Deep Learning Methods for Predicting Outages of Industrial Assets
                      </span>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 >
          <Menu />
        </v-flex>
        <v-flex xs12 style="padding-bottom:20px;" >
          <router-view style="min-height:500px;" />
        </v-flex>
        <v-flex xs12 style="margin-top:20px">
        </v-flex>
        <v-flex xs12>
          <v-layout wrap  justify-center fill-height align-center style="padding-bottom:20px;color:white;margin-right:140px">
            <v-flex xs12>
              <v-container grid-list-md justify-center fill-height align-center>
                <v-layout wrap>
                  <v-flex xs6>
                    <v-layout wrap >
                      <v-flex xs12 style="margin-left:28px;margin-right:80px;margin-bottom:10px;margin-top:18px;padding-left: 70px;">
                        COGNITUS maintained by <a href="https://github.com/behas" style="color:white">Dr. Bernhard Haslhofer</a>
                        <br>
                        Last update: {{text_data.last_update}}
                        <br>
                        Published with <a href="https://pages.github.com/" style="color:white">GitHub Pages</a>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6 style="background-color: rgba(255, 255, 255, 0.85); border-radius: 8px;color:black">
                    <v-layout wrap align-center >
                      <v-flex xs3 style="text-align: center;">
                        Funded or financed in the 
                        <br>
                        <b>"ICT of the Future"</b> 
                        <br>
                        program by the
                      </v-flex>
                      <v-flex xs5 justify-center style="text-align: center;">
                        <img src="./assets/BMK_Logo_srgb_EN.svg" style="height:auto; width:250px;vertical-align: middle"/>
                      </v-flex>
                      <v-flex xs4 justify-center style="text-align: center;">
                        <img src="./assets/ffg_logo_en.svg" style="height:auto; width:200px;vertical-align: middle"/>
                      </v-flex>
                     </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
//import Home from './views/Home';
import Menu from './components/Menu';
import axios from "axios";

export default {
  name: 'App',

  components: {
    Menu
  },

  data() {
    return {
      text_data: {
        last_update: undefined
      }
    }
  },
  mounted() {
    this.load_data();
  },
  methods: {
    async load_data(){
      try{
        let req_data = await axios.get("/data.json");
        if(req_data && req_data.data && req_data.data.partners)
          this.text_data = req_data.data;
        
      }catch(e){
        console.error(e);
      }
    }
  }
};
</script>

<style>
.v-application{
  font-family: sofia-pro, sans-serif;
  font-weight: 400;
  font-style: normal;           
}

.background_image {
  background-image: url("./assets/VISUAL_04_RGB_exp.svg"), linear-gradient(#9b9b9b, #1a1a1a); /* W3C */
  background-size: 100% auto;/*cover;*/
}
.background_image_2 {
  /*background: url("./assets/AI-background.jpg") no-repeat left top, linear-gradient(black, white);*/
  background-color: white;
  background-position: 0 0;
  background-repeat: no-repeat;

  /* Fallback */
  background-image: url('./assets/AI-background.jpg');

  /* CSS gradients */
  background-image: url('./assets/AI-background.jpg'), 
                    -moz-linear-gradient(top, black 0%, black 100%);
  background-image: url('../images/sidebar_angle.png'), 
                    -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(100%, black));
  background-image: url('./assets/AI-background.jpg'), 
                    linear-gradient(to bottom, black, black);

  /* IE */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ADB2B6', endColorstr='#ABAEB3', GradientType=0);
}
.header_span {
  font-size:40px; 
  color:white;
}
.header_div {
  margin-top:30px;
}
span {
  font-size: 18px;
}

@media (max-width: 768px) {
  span {
    font-size: 10px;
  }
}
</style>

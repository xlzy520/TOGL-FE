<template>
  <div>
    <div class="top">
      <div class="top_width">
        <div class="top_logo">
          <a href="#"><img src="~assets/image/logo.png" /></a>
        </div>
        <div class="top_right">
          <div class="top_right_text">
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Site Map</a>
            <div class="top_right_get">
              <a href="#">Eng</a> | <a href="#">繁</a> | <a href="#">简</a>
            </div>
          </div>
          <div class="top_right_size">
            <button class="but_16">A</button>
            <button class="but_24">A</button>
            <button class="but_30">A</button>
          </div>
          <div class="clear"></div>
          <div class="top_right_but">
            <a href="#"><i class="fa fa-search"></i></a>
            <a href="index.html"><i class="fa fa-home"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="register_bg"></div>
      <div class="register_width">
        <div class="register_title"><b>Create Your Account</b></div>
        <div class="register_txt">
          *Fields are required if not otherwise stated.
          <div class="register_txt_title title_24">
            <b>Details of Organization :</b>
          </div>
          <div class="register_txt_label title_24">Nature of Organization</div>
          <div class="register_li">
            <div class="register_radio_li">
              <div class="payment_radio_li title_20">
                <input
                  type="radio"
                  class="radio_class"
                  name="delivery_radio"
                  id="delivery_1"
                />
                <label for="delivery_1">
                  Incumbent Legislative Council (LegCo) Member/ District Council
                  (DC) Member
                </label>
              </div>
            </div>
            <div class="register_radio_li">
              <div class="payment_radio_li title_20">
                <input
                  type="radio"
                  class="radio_class"
                  name="delivery_radio"
                  id="delivery_2"
                />
                <label for="delivery_2">
                  Charitable institution or trust of a public character which is
                  exempt from tax under section 88 of the Inland Revenue
                  Ordinance (Cap. 112) or society registered under Societies
                  Ordinance (Cap. 151)
                </label>
              </div>
            </div>
            <div class="register_radio_li">
              <div class="payment_radio_li title_20">
                <input
                  type="radio"
                  class="radio_class"
                  name="delivery_radio"
                  id="delivery_3"
                />
                <label for="delivery_3">
                  Government department or statutory organisation
                </label>
              </div>
            </div>
            <div class="register_radio_li">
              <div class="payment_radio_li title_20">
                <input
                  type="radio"
                  class="radio_class"
                  name="delivery_radio"
                  id="delivery_4"
                />
                <label for="delivery_4"> Other legally registered body </label>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">
                Name of Organization/ Name of LegCo/ DC Member
              </div>
              <div class="register_li">
                <div class="register_li_label">
                  Provide registered organization name. Identical name required.
                </div>
                <div class="register_li_input register_li_error">
                  <input type="text" class="form-input" />
                  <i class="fa fa-exclamation-circle"></i>
                </div>
              </div>
            </div>
            <div class="register_50">
              <div class="register_txt_label title_24">
                Name of Sub-Organization(Optional)
              </div>
              <div class="register_li">
                <div class="register_li_label">
                  Please provide registered sub-organization name. Identical
                  name required.
                </div>
                <div class="register_li_input">
                  <input type="text" class="form-input" />
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">
                Registration Number(Optional)
              </div>
              <div class="register_li">
                <div class="register_li_input">
                  <input type="text" class="form-input" />
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">
                Validity Period(Optional)
              </div>
              <div class="register_li">
                <div class="layui-form register_li_input register_input_50">
                  <input type="text" class="form-input" id="test1-1" />
                  <i class="fa fa-calendar"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_txt_title padding_20 title_24">
            <b>Contact information:</b>
          </div>

          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">Family Name</div>
              <div class="register_li">
                <div class="register_li_input">
                  <input type="text" class="form-input" />
                </div>
              </div>
            </div>
            <div class="register_50">
              <div class="register_txt_label title_24">Given Name</div>
              <div class="register_li">
                <div class="register_li_input">
                  <input type="text" class="form-input" />
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">
                Position in the Applicant Organization
              </div>
              <div class="register_li">
                <div class="register_li_input layui-form">
                  <input type="text" class="form-input" />
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_100">
              <div class="register_txt_label title_24">
                Correspondence Address
              </div>
              <div class="register_li">
                <div class="register_li_input">
                  <input type="text" class="form-input" />
                </div>
                <div class="register_li_input padding_10">
                  <input type="text" class="form-input" />
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">E-mail</div>
              <div class="register_li">
                <div class="register_li_input">
                  <input type="email" class="form-input" />
                </div>
              </div>
            </div>
          </div>

          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">Tel.No.</div>
              <div class="register_li">
                <div class="register_li_input">
                  <input type="number" class="form-input" />
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">
                Emergency Tel.No.(Optional)
              </div>
              <div class="register_li">
                <div class="register_li_input">
                  <input type="number" class="form-input" />
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">Fax.No.(Optional)</div>
              <div class="register_li">
                <div class="register_li_input">
                  <input type="number" class="form-input" />
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>

          <div class="register_txt_title padding_20 title_24">
            <b>Supporting Documents</b>
          </div>
          <div class="register_li">
            I/We attach the following documents in support of my/our application
            (please see belows Note (1)):<br />
            (a) documentary evidence to prove that the Applicant is a charitable
            institution or trust of apublic character exempt from tax under
            section 88 of the Inland Revenue Ordinance Cap.112 (if
            applicable);<br />
            (b) documentary evidence to prove that the Applicant is a society
            registered under the Societies Ordinance Cap. 151 (if applicable);
            or<br />
            (C) documentary evidence to prove that the Applicant is a legally
            registered body (please specify).
            <div class="register_centent">
              <div class="register_50 padding_10">
                <input type="text" class="form-input" />
              </div>
            </div>

            <div class="register_Upload">
              <button type="button" class="layui-btn">
                Upload New Documents <i class="fa fa-upload"></i>
              </button>
              <div class="register_Upload_table">
                <div class="register_Upload_table_li">
                  Document A.pdf<i class="layui-icon layui-icon-close"></i>
                </div>
                <div class="register_Upload_table_li">
                  Document B.pdf<i class="layui-icon layui-icon-close"></i>
                </div>
              </div>
            </div>
            I/We acknowledge and agree that failure to submit the required
            documents may lead to rejection of the application. I/We also
            acknowledge and agree that I/we may need to submit other additional
            information or documents as may be required by the Lands Department
            to facilitate the assessment of my/our application. Unless such
            additional information/documents are submitted, my/our application
            cannot be further processed.
            <br />NOTE:<br />
            (1) No documentation proof is required if the application is made by
            incumbent Lego Members/DC Members, Government departments or
            statutory organisations.
            <div class="clear"></div>
          </div>

          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">
                Which service district you are for?
              </div>
              <div class="register_li">
                <div class="register_li_input layui-form">
                  <div id="district_select"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_100">
              <div class="register_txt_label title_24">
                Agreement for privacy policy
              </div>
              <div class="register_li">
                <div class="register_radio_li">
                  <div class="payment_radio_li title_20">
                    <input
                      type="radio"
                      class="radio_class"
                      name="Agreement"
                      id="Agreement_1"
                    />
                    <label for="Agreement_1">
                      I understand and agree to the
                      <a class="PrivacyPolicy_open"
                        ><b>User Agreement Privacy Policy</b></a
                      >
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="register_botton padding_10">
            <a href="index.html" class="register_botton_a">Back</a>
            <a href="RegistrationConfirmPage.html" class="register_botton_but"
              >Apply</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="box_Tips_width register_error_box PrivacyPolicy_box">
      <div class="box_Tips_ct">
        <div class="box_Tips_table">
          <div class="PrivacyPolicy_box_close">
            <i class="layui-icon layui-icon-close"></i>
          </div>
          <div class="PrivacyPolicy_box_title">Applicant Declaration</div>
          <div class="PrivacyPolicy_box_eer">
            Please read and scroll down to the bottom to accept these terms.
          </div>
          <div class="PrivacyPolicy_box_txt">
            <b>A. UNDERTAKING</b><br />
            I/We hereby undertake that:-<br />
            (1) All activities to be held and contents of messages to be
            delivered or displayed during the event shall comply with the laws
            of the Hong Kong Special Administrative Region;
            <br />(2) In case that the Director of Highways, an Assistant
            Commissioner for Transport, the Commissioner of Police or the
            Director of Food and Environmental Hygiene inform me/us at any time
            that any of the specified spots shall not be used for the event,
            I/we shall immediately cease the event and reinstate the spot(s),
            even when approval has been granted; <br />(3) I/We shall obtain any
            other necessary licences, permits and approvals from other relevant
            authorities as may be required for holding the non-profit making and
            non-fund raising activities; and <br />(4) In case of ineligibility
            to apply for or hold the non-profit making and non-fund raising
            activities set out in this application as a consequence of changes
            in my/our status or other aspects, I/we shall inform the Lands
            Department forthwith and this application shall be deemed to have
            been withdrawn. <br /><br /><b>B. INDEMNITY</b> <br />I/We shall
            indemnify the Government of the HKSAR (“the Government”) and the
            Director of Lands and his officers from and against all liabilities,
            costs, expenses, claims, actions, demand and proceedings of
            whatsoever nature arising out of or in connection with the
            occupation of Government land or the setting up, use and holding of
            or carrying out of any activities at the street counters at the
            designated spots. <br /><br /><b>C. DECLARATION</b><br />
            I/We hereby declare that:-<br />
            (1) This is the only application for temporary occupation of
            Government land that I/we have made for the above mentioned
            occupation period in respect of the same designated spot(s) or
            otherwise;
            <br />(2) The particulars provided in this form are in all respects
            true, complete and accurate; and <br />(3) I/We have read the Notes
            below and the Guidelines on application for temporary occupation of
            Government land for setting up street counters to hold non-profit
            making activities. <br /><br /><b>D. CONSENT TO DISCLOSE</b><br />
            By submitting this application, I/we hereby consent to the
            Government’s disclosure of any or all of the information provided by
            me/us on this application form, whether of its own motion or upon
            request by any third party (written or otherwise) and without
            further reference to me/us.
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="container">
        <div class="foot_left">
          <img src="~assets/image/foot_logo.png" />
          <span>
            <a href="#">Important</a><b>|</b
            ><a href="#">Privacy Policy Statement</a><br />
            Lands Department © The Government of the HKSAR. <br />
            All Rights Reserved.
          </span>
        </div>
        <!-- <div class="foot_right">
          <img src="~assets/imagew3c_icon.jpg" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.container {
  max-width: 1400px;
  width: 96%;
  padding: 0px;
  position: relative;
}

.register_bg {
  background: url(assets/image/hp_background.jpg) center center no-repeat;
  background-size: cover;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
}
.top {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flow-root;
  z-index: 9; /* overflow: hidden; */
}
.top_width {
  display: block;
  padding: 10px 20px;
}
.top_logo {
  float: left;
}
.top_logo img {
  height: 95px;
}
.top_right {
  float: right;
  color: #2079a9;
}
.top_right_text {
  float: left;
  padding-top: 11px;
  padding-right: 5px;
}
.top_right a {
  text-decoration: underline;
  padding: 0px 5px;
}
.top_right_get {
  display: inline-block;
  padding: 0px 3px;
}
.top_right_get a {
  padding: 0px 1px;
}

.top_right_size {
  display: inline-block;
  padding-left: 3px;
  float: right;
  overflow: hidden;
}
.top_right_size button {
  background: none;
  border: none;
  line-height: 30px;
  height: 30px;
  border-bottom: #2079a9 solid 1px;
  font-weight: 600;
  float: left;
  padding: 0px 5px;
}
.top_right_size .but_24 {
  font-size: 24px;
  line-height: 34px;
}
.top_right_size .but_16 {
  font-size: 16px;
  line-height: 40px;
}
.top_right_size .but_30 {
  font-size: 30px;
}

.top_right_but {
  display: block;
  text-align: right;
  padding-top: 10px;
}
.top_right_but a {
  padding: 0px;
  overflow: hidden;
  margin: 0px;
  float: right;
  display: inline-block;
}
.top_right_but i {
  font-size: 24px;
  padding: 0px 15px;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  border-radius: 40px;
  background: #fff;
  margin-left: 10px;
}
.top_right_but .fa-search {
  font-size: 20px;
}
.top_right_but a:hover i {
  background: #2079a9;
  color: #fff;
}

.register_width {
  position: relative;
  background: #fff;
  border-radius: 20px;
  padding: 40px 20px;
  margin-bottom: 50px;
  margin-top: 10px;
}
.register_title {
  display: block;
  font-size: 36px;
  background: #2ca2b9;
  color: #fff;
  padding: 5px 10px;
  text-align: center;
  border-radius: 10px;
}
.register_txt {
  padding: 40px 50px;
  position: relative;
}
.title_24 {
  font-size: 20px;
}
.title_20 {
  font-size: 18px;
}
.register_txt_title {
  color: #2079a9;
  padding: 15px 0px;
}
.register_txt_label {
  color: #2079a9;
  padding-bottom: 15px;
}
.register_txt_label a {
  float: right;
  font-size: 16px;
  padding-top: 5px;
  padding-right: 15px;
  color: #3b5974;
  text-decoration: underline;
}

.register_li {
  padding: 0px 10px;
  padding-bottom: 30px;
}
.payment_radio_li {
  display: block;
  padding-bottom: 15px;
}
.register_li .register_radio_li:nth-last-child(1) {
  padding-bottom: 0px;
}
.radio_class {
  display: none;
}
.radio_class + label {
  background: url(assets/image/radio_icon.png) no-repeat top left;
  background-size: 26px auto;
  line-height: 1.5;
  position: relative;
  min-height: 26px;
  display: block;
  padding: 0;
  cursor: pointer;
  padding-left: 35px;
  margin: 0;
  font-weight: normal;
  text-align: left;
}
.radio_class:checked + label {
  background: url(assets/image/radio_y_icon.png) no-repeat top left;
  background-size: 26px auto;
}
.radio_class + label a {
  text-decoration: underline;
}

.checkbox_class {
  display: none;
}
.checkbox_class + label {
  background: url(assets/image/checkbox_icon.png) no-repeat top left;
  background-size: 26px auto;
  line-height: 1.5;
  position: relative;
  min-height: 26px;
  display: block;
  padding: 0;
  cursor: pointer;
  padding-left: 35px;
  margin: 0;
  font-weight: normal;
  text-align: left;
}
.checkbox_class:checked + label {
  background: url(assets/image/checkbox_y_icon.png) no-repeat top left;
  background-size: 26px auto;
}
.checkbox_class + label a {
  text-decoration: underline;
}

.register_centent {
  display: flex;
  margin: 0px -30px;
}
.register_50 {
  width: 50%;
  padding: 0px 30px;
  float: left;
}
.register_li_label {
  margin-bottom: 6px;
}
.form-input {
  border: 1px solid #3d9dd1;
  border-radius: 10px;
  background: #ecf6fb;
  padding: 10px 15px;
  font-size: 16px;
  width: 100%;
}
.register_li_input {
  display: block;
  position: relative;
}
.register_li_error .form-input {
  border: 1px solid #ff5c5c;
  background: #ffe2e2;
}
.register_li_input i.fa {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -15px;
  font-size: 30px;
}
.register_li_error i.fa {
  color: #e4191c;
}
.register_input_50 {
  width: 50%;
}
.register_100 {
  width: 100%;
  padding: 0px 30px;
}
.padding_10 {
  padding-top: 15px;
}
.padding_20 {
  padding-top: 40px;
}

.layui-form-select .layui-input {
  border: 1px solid #3d9dd1;
  border-radius: 10px;
  background: #ecf6fb;
  padding: 12px 15px;
  height: auto;
  font-size: 16px;
  width: 100%;
}
.layui-form-select .layui-edge {
  border-top-color: #3d9dd1;
  border-width: 10px;
  margin-top: -4px;
}
:root .layui-form-selected .layui-edge {
  margin-top: -15px;
}
.layui-form-select dl dd.layui-this {
  background: #2ca2b9;
}

.register_Upload {
  padding: 10px 0px;
}

.layui-btn {
  border-radius: 10px;
  font-size: 18px;
  padding: 5px 20px;
  height: auto;
  background-color: #2079a9;
}
.layui-btn i {
  margin-left: 30px;
}
.register_Upload_table {
  display: block;
  padding-top: 10px;
  overflow: hidden;
  margin: -5px;
}
.register_Upload_table_li {
  display: inline-block;
  margin: 5px;
  float: left;
  position: relative;
  border: 1px solid #3d9dd1;
  border-radius: 10px;
  background: #ecf6fb;
  padding: 10px 15px;
  padding-right: 60px;
  font-size: 18px;
}
.register_Upload_table_li i {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -15px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  color: #3d9dd1;
}
.register_Upload_table_li:nth-last-child(1) {
  margin-right: 0px;
}
.register_Upload_table_li i.fa-download {
  font-size: 22px;
  font-weight: 100;
  margin-top: -11px;
}

.register_botton {
  display: block;
  text-align: center;
}
.register_botton_a {
  color: #2ca2b9;
  background: #fff;
  border: 2px solid #2ca2b9;
  margin: 0px 5px;
  border-radius: 36px;
  font-size: 20px;
  padding: 0px 30px;
  display: inline-block;
  height: 48px;
  line-height: 44px;
}
.register_botton_a:hover {
  color: #2ca2b9;
  background: #ecf6fb;
}
.register_botton_a:focus {
  border: 2px solid #2ca2b9;
}
.register_botton_but {
  color: #2ca2b9;
  background: #2ca2ba;
  color: #fff !important;
  cursor: pointer;
  margin: 0px 5px;
  border: 2px solid #2ca2ba;
  border-radius: 36px;
  font-weight: 600;
  font-size: 20px;
  padding: 0px 30px;
  height: 48px;
  display: inline-block;
  line-height: 42px;
}
.register_botton_but:hover {
  background: #1d8398;
  border-color: #1d8398;
}
.register_botton_but:focus {
  opacity: 0.5;
  border: 2px solid #1d8398;
}

xm-select {
  border: 1px solid #3d9dd1 !important;
  border-radius: 10px !important;
  background: #ecf6fb !important;
  padding: 0px 5px !important;
  height: 46px !important;
  font-size: 16px !important;
  width: 100% !important;
}
xm-select > .xm-label .xm-label-block {
  margin-top: 6px !important;
}
xm-select > .xm-icon {
  border-top-color: #3d9dd1 !important;
  border-width: 10px !important;
  margin-top: -4px !important;
}
xm-select > .xm-icon-expand {
  margin-top: -15px !important;
}
xm-select > .xm-label.single-row {
  right: 40px !important;
}
</style>

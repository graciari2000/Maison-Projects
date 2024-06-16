<template>
    <div class="container">
        <form>
            <div class="row">
                <h4>Account</h4>
                <div class="error">
                </div>
                <div class="input-group input-group-icon">
                    <input type="text" placeholder="Full Name" v-model="v$.form.fullname.$model"/>
                    <div class="input-icon"><i class="fa fa-user"></i></div>
                </div>
                <div class="error">
                </div>
                <div class="input-group input-group-icon">
                    <input type="email" placeholder="Email Adress" v-model="v$.form.email.$model"/>
                    <div class="input-icon"><i class="fa fa-envelope"></i></div>
                </div>
                <div class="error">
                </div>
                <div class="input-group input-group-icon">
                    <input type="password" placeholder="Password" v-model="v$.form.password.$model"/>
                    <div class="input-icon"><i class="fa fa-key"></i></div>
                </div>
            </div>
            <div class="row">
                <div class="col-half">
                    <h4>Date of Birth</h4>
                    <div class="input-group">
                        <div class="col-third">
                            <input type="text" placeholder="DD" />
                        </div>
                        <div class="col-third">
                            <input type="text" placeholder="MM" />
                        </div>
                        <div class="col-third">
                            <input type="text" placeholder="YYYY" />
                        </div>
                        <div class="error">
                        </div>
                    </div>
                </div>
                <div class="col-half">
                    <h4>Gender</h4>
                    <div class="input-group">
                        <input type="radio" name="gender" value="male" id="gender-male" />
                        <label for="gender-male">Male</label>
                        <input type="radio" name="gender" value="female" id="gender-female" />
                        <label for="gender-female">Female</label>
                        <div class="error">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h4>Payment</h4>
                <div class="input-group input-group-icon">
                    <input type="text" placeholder="Card Number" />
                    <div class="input-icon"><i class="fa fa-credit-card"></i></div>
                </div>
                <div class="col-half">
                    <div class="input-group input-group-icon">
                        <input type="text" placeholder="Card CVC" />
                        <div class="input-icon"><i class="fa fa-user"></i></div>
                    </div>
                    <div class="error">
                    </div>
                </div>
                <div class="col-half">
                    <div class="input-group">
                        <select>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                        </select>
                    </div>
                    <div class="error">
                    </div>
                </div>
            </div>
            <div class="row">
                <h4>Terms and Conditions</h4>
                <div class="input-group">
                    <input type="checkbox" id="terms" />
                    <label for="terms">I accept the terms and conditions for signing up to this service,
                        and hereby confirm I have read the privacy policy.</label>
                </div>
                <div class="error">
                </div>
            </div>
            <div class="row">
                <button>save</button>
            </div>
        </form>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, alphaNum } from '@vuelidate/validators'
import "../assets/style.css";
import { numeric } from '@vuelidate/validators';

export default {

    setup () {
        return { v$: useVuelidate() }
    },

    data() {
        return {
            formData: {
                fullname: '',
                email: '',
                password: '',
                birth: { day: '', month: '', year: '' },
                gender: '',
                cardNumber: '',
                cardCVC: '',
                expiryMonth: '',
                expiryYear: '',
                acceptTerms: false
            },
            errors: {}
        };
    },

        validations() {
            return {
                form: {
                    fullname: { required, minLength: minLength(6) },
                    email: {required, email},
                    password: {required, alphaNum,min: minLength(6)},
                    birth: {required, numeric},
                    cardNumber: {required, numeric, minLength: minLength(16)},
                    cardCVC: {required, numeric, minLength: minLength(3)},
                }
            }
        },
    methods: {
        submitForm() {
            // Example validation
            this.errors = {};
            if (!this.formData.name) {
                this.errors.name = 'Name is required';
            }
            // Add more validation rules as needed

            // If no errors, submit the form (e.g., send data to server)
            if (Object.keys(this.errors).length === 0) {
                console.log('Form submitted:', this.formData);
                // Here you would typically send the formData to your backend API
            }
        }
    }
};
</script>

<style scoped>
/* Add scoped styles as needed */
</style>
<template>
    <transition
      name="fade"
      v-on:enter="enterTransition"
    >
    	<div class="alert app-alert" :class="className" role="alert" v-if="className">
            {{ message }}
    	</div>
    </transition>
</template>

<script>
    export default {
    	data: function() {
            return {
                message: '',
                type: ''
            }
        },
        created: function() {
            var vm = this;

            GlobalEvents.$on('setAlertMessage', function(alertMessage, alertType) {
                vm.message = alertMessage;
                vm.type = alertType;
            });

        },
        methods: {
            enterTransition: function (el, done) {
                var vm = this;

                setTimeout(function() {
                    vm.message = '';
                    vm.type = '';
                }, 2000);
            }
        },
        computed: {
            className: function () {
                if(this.type) {
                    return 'alert-' + this.type;    
                }

                return this.type;
            }
        }        
    }
</script>

<style>

	.app-alert { position: fixed; min-width: 250px; top: 20px; right: 20px; z-index: 999; }

    .fade-enter-active, 
    .fade-leave-active { transition: opacity .5s }

    .fade-enter, 
    .fade-leave-active { opacity: 0; }
</style>
<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
            <div class="modal-container w-75" @click.stop>
                <div class="modal-header">
                    <h3>{{ title }}</h3>
                    <button class="btn-close" @click="$emit('close')"></button>
                </div>
                <div class="modal-body">
                    <hr class="w-100 mx-0 px-0">
                <slot></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>        
                </div>
            </div>
        </div>
    </transition>
    </template>
    
    <script>
    export default {
        name: 'Modal',
        props: {
            title: String
        }
    };
    </script>
    
    <style>
    /* Gaya untuk modal */
    .modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-container {
        background-color: white;
        border-radius: 4px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        width: 400px;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-header h3 {
        margin: 0;
    }
    
    .modal-header button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 20px;
    }
    </style>
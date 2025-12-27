/**
 * ============================================================
 * VUE.JS COMPONENT - SWIM LESSONS TABLE
 * ============================================================
 */

// Vue Component for Lesson Types Table
Vue.component('lesson-types-table', {
    data() {
        return {
            lessons: [
                {
                    type: 'Private Swim Lessons',
                    ageRange: '3 months - Adult',
                    description: 'Our private swim lessons provide one-on-one instruction for students ages three months through adult. Private swim lessons are the best option for accelerated learning. Each lesson will allow our instructors to build on the momentum and skills taught in the previous lesson with minimal downtime. From the basics of putting your face into the water to refining your stroke technique, private lessons will offer the highest rate of progress.',
                    linkText: 'Inquire here!'
                },
                {
                    type: 'Semi-Private Swim Lessons',
                    ageRange: '2.5 - 13 years',
                    description: 'At Splashes, our semi-private swim lessons offer students ages 2.5 to 13 the opportunity to interact with another student of a similar age and ability while still receiving personal attention. Whether you would like us to pair your child with another student of similar age and ability or would like to take lessons with a friend or sibling, our semi-private lessons are a cost effective option. Students also have the opportunity to observe one another in the lesson.',
                    linkText: 'Inquire here!'
                },
                {
                    type: 'Parent & Me Lessons',
                    ageRange: '3 months - 3 years',
                    description: 'Our Parent and Me swimming lessons (also known as "Mommy and Me" or "Daddy and Me" classes) gives parents the opportunity to be hands-on with their little one while our instructors facilitate the learning process between you and your child. These lessons provide a fun and relaxed environment for you and your child in the water. Children ages 3 months through 3 years of age can participate. However, we encourage children ages 2.5 and older to participate in private or semi-private swim lessons.',
                    linkText: 'Inquire here!'
                },
                {
                    type: 'Stroke Clinic',
                    ageRange: '5+ years (Level 8+)',
                    description: 'Splashes Stroke Clinics give students the opportunity to advance their swimming techniques while in a group setting. Our Stroke Clinic classes place emphasis on proper technique over speed and prepare students for swim team. Swimmers ages 5 and older who are level 8 or higher can benefit from participating in these 40 minute classes. A strong technical foundation will ensure that students\' progress much faster when the time comes for them to work on speed. Our stroke clinics are exciting and fast paced, where each student will receive a great workout.',
                    linkText: 'Inquire here!'
                },
                {
                    type: 'Adult Swim Lessons',
                    ageRange: '13+ years',
                    description: 'It is never too late to learn how to swim! Whether you are looking to learn the basics or improve your technique to use swimming as a form of exercise, our trained instructors will tailor each lesson to fit your individual needs. At Splashes, our adult lessons are geared for swimmers ages 13 and older. From beginners to advanced, our adult swimming lessons are a great option for those looking to conquer their fear of the water or who are looking to become stronger swimmers.',
                    linkText: 'Inquire here!'
                }
            ]
        }
    },
    methods: {
        openInterestForm(lessonType) {
            this.$root.openInterestModal(lessonType);
        }
    },
    template: `
        <div class="lesson-types-table-wrapper">
            <div class="table-responsive">
                <table class="table lesson-types-table">
                    <thead>
                        <tr>
                            <th>Lesson Type</th>
                            <th>Age Range</th>
                            <th>Description</th>
                            <th>Inquire</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="lesson in lessons" :key="lesson.type">
                            <td><strong>{{ lesson.type }}</strong></td>
                            <td>{{ lesson.ageRange }}</td>
                            <td>{{ lesson.description }}</td>
                            <td>
                                <button @click="openInterestForm(lesson.type)" class="btn btn-sm btn-primary">
                                    {{ lesson.linkText }}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
});

// Main Vue App
const app = new Vue({
    el: '#lessonTypesApp',
    data() {
        return {
            selectedLessonType: ''
        }
    },
    methods: {
        openInterestModal(lessonType) {
            this.selectedLessonType = lessonType;
            document.getElementById('interestLessonType').value = lessonType;
            // Show Bootstrap modal
            $('#interestFormModal').modal('show');
        },
        handleFormSubmit(event) {
            event.preventDefault();
            
            const name = document.getElementById('interestName').value;
            const phone = document.getElementById('interestPhone').value;
            const lessonType = this.selectedLessonType;
            
            // Validation
            if (!name || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            // show confirmation
            alert(`Thank you ${name}! We'll contact you soon about ${lessonType}.`);
            
            // Reset form and close modal
            document.getElementById('interestForm').reset();
            // Clear the lesson type field
            document.getElementById('interestLessonType').value = '';
            $('#interestFormModal').modal('hide');
        }
    }
});
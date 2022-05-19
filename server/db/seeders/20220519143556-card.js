'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('Cards', [{
      topic: 'Pervaya tema',
      question: 'Pervi vopros',
      price: '100',
      correct_answer: 'true',
      false_answer_1: 'false',
      false_answer_2: 'false',
      false_answer_3: 'false',
      createdAt: new Date(),
      updatedAt: new Date(),
   },{
    topic: 'Vtoraya tema',
    question: 'Vtoroy vopros',
    price: '200',
    correct_answer: 'true',
    false_answer_1: 'false',
    false_answer_2: 'false',
    false_answer_3: 'false',
    createdAt: new Date(),
    updatedAt: new Date(),
   }], {});
  
  },

  async down (queryInterface, Sequelize) {
  
 
  await queryInterface.bulkDelete('Cards', null, {});

  }
};

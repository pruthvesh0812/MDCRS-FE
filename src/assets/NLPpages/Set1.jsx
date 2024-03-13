import React, { useState } from 'react';

const Set1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userResponses, setUserResponses] = useState({
    page1: { question1: '', question2: '', question3: '' },
    page2: { question4: '', question5: '', question6: '' },
    page2: { question7: '', question8: '', question9: '' },
    // Add more pages as needed
  });

  const questions = [
    'What is your age, gender, height and weight?',
    'Mention if you have any existing medical conditions or chronic illnesess',
    'Mention if you have a family history of any medical conditions or chronic illnesses',
    'Are you undergoing pregnancy or breastfeeding?',
    'Do you smoke? If yes, how much and how long it has been?',
    'Do you consume alcohol? If yes, how frequently and in what quantity?',
    'Do you have any specific dietary preference(eg. veg, vegan, non-veg)? Also mention if you have any dietary restrictions(eg. lactose free, gluten free, low carb diets)',
    'Do you have any food allegies(eg. soy, peanuts, milk, fish, eggs etc?',
    'How often do you find yourself reaching for or consuming items high in sugar, salt, or processed foods, either as snacks like candies, chips, cakes or during meals like burger, pizza?',
    'Decribe your physical activity levels, type, frequency and duration',
    'Do you face any health issues while exercising? (chest pain, shortness of breath etc)',
    'How many hours of sleep do you get in a day? How is your overall sleeping quality?',


  ];

  const handleInputChange = (page, question, answer) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [page]: { ...prevResponses[page], [question]: answer },
    }));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages && areAllQuestionsAnswered(currentPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const areAllQuestionsAnswered = (page) => {
    const pageResponses = userResponses[`page${page}`];
    return Object.values(pageResponses).every((answer) => answer !== '');
  };

  const totalPages = 2; // Set the total number of pages

  return (
    <div className='ml-[30%] my-[10%]'>
      {/* <h1>Questionnaire - Page {currentPage}</h1> */}
      {questions.slice((currentPage - 1) * 3, currentPage * 3).map((question, index) => (
        <div key={index} className='my-3'>
          <p className='font-Roboto text-sm mb-1'>{question}</p>
          <input
            type="text"
            value={userResponses[`page${currentPage}`][`question${index + 1}`]}
            onChange={(e) =>
              handleInputChange(`page${currentPage}`, `question${index + 1}`, e.target.value)
            }
            className='h-8 border border-blue-500 px-3 py-2 rounded  focus:outline-none focus:border-blue-700 w-1/2 '
          />
        </div>
      ))}
      <button onClick={handlePrevPage} disabled={currentPage === 1} className='bg-blue-400 px-2 py-1 m-2 rounded-md'>
        Prev
      </button>
      <button onClick={handleNextPage} disabled={!areAllQuestionsAnswered(currentPage)} className='bg-blue-400 px-2 py-1 m-2 rounded-md'>
        Next
      </button>
    </div>
  );
};

export default Set1;

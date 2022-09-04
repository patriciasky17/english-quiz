(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1. Richard wasn't feeling well. _____________, he decided to stay home from work.",
        answers: {
          a: "therefore",
          b: "anyway",
          c: "however",
          d: "meanwhile"
        },
        correctAnswer: "a"
      },

      {
        question: "2. Ruby loves blueberry pie _________ it is made with freshly picked blueberries",
        answers: {
          a: "when",
          b: "because",
          c: "whether",
          d: "as if"
        },
        correctAnswer: "a"
      },

      {
        question: "3. I ________ the speech you gave last Tuesday night, but I was in bed with the flu",
        answers: {
          a: "will have heard",
          b: "would hear",
          c: "would have heard",
          d: "might heard"
        },
        correctAnswer: "c"
      },

      {
        question: "4. ___________ he waited for the doctor to call him in, David sat in the waiting room and read the newspaper.",
        answers: {
          a: "even if",
          b: "beside when",
          c: "while",
          d: "so that"
        },
        correctAnswer: "c"
      },

      {
        question: "5. The ticket said the show would start at 8:00, but the curtains didn't go up _________ 8:30.",
        answers: {
          a: "less than",
          b: "about",
          c: "untill",
          d: "since"
        },
        correctAnswer: "c"
      },

      {
        question: "6. Plato believed that boys and girls should be given an equal education. This idea is rarely mentioned in textbooks",
        answers: {
          a: "Plato believed that boys and girls should be given an equal education, an idea that is rarely mentioned in textbooks",
          b: "Plato believed that boys and girls should be given an equal education, where this idea is rarely mentioned in textbooks.",
          c: "Plato believed that boys and girls should be given  equal education, where this idea is rarely mentioned in textbooks.",
          d: "Plato believed that boys and girls should be given an equal education, whereupon this idea is rarely mentioned in textbooks."
        },
        correctAnswer: "a"
      },

      {
        question: "7. The old brain is called the reptilian brain. It does not know passion, but only stolid obedience to its own genetic dictates",
        answers: {
          a: "After the old brain is called the reptilian brain, it does not know passion, but only stolid obedience to its own genetic dictates.",
          b: "The old brain, called the reptilian brain, does not know passion, but only stolid obedience to its own genetic dictates.",
          c: "The old brain is called the reptilian brain, whereupon it does not know passion, but only stolid obedience to its own genetic dictates",
          d: "Unless the old brain, called the reptilian brain, does not know passion, only stolid brain, does not know passion, only stolid"
        },
        correctAnswer: "b"
      },

      {
        question: "8. The cake I made last week tasted ________ than the one I made today.",
        answers: {
          a: "more good",
          b: "more better",
          c: "best",
          d: "better"
        },
        correctAnswer: "d"
      },

      {
        question: "9. Of the three brothers, Jacob is the ________.",
        answers: {
          a: "taller",
          b: "tallest",
          c: "more tall",
          d: "most tallest"
        },
        correctAnswer: "b"
      },

      {
        question: "10. Riding the Tornado at the amusement park was ________ than I thought it would be",
        answers: {
          a: "more terrifying ",
          b: "most terrifying",
          c: "more terrifyingly ",
          d: "terrifying"
        },
        correctAnswer: "a"
      },
      
      {
        question: "11. Surprisingly, my younger brother dresses more conservatively than I do.",
        answers: {
          a: "more conservatively than I do",
          b: "more conservative than I do",
          c: "the most conservative in opposition to me.",
          d: "more conservatively than me"
        },
        correctAnswer: "a"
      },

      {
        question: "12. Our team scored less baskets today than we did last Tuesday.",
        answers: {
          a: "less baskets today than we did",
          b: "a lesser number of baskets today then we did",
          c: "today less baskets than were scored",
          d: "fewer baskets today than we did"
        },
        correctAnswer: "d"
      },
      
      {
        question: "13. There wasn't nothing that could have been easier.",
        answers: {
          a: "There wasn't nothing that could have been easier",
          b: "There was nothing that could have been more easier",
          c: "Nothing could have been easier",
          d: "Nothing could have been more easier"
        },
        correctAnswer: "c"
      },

      {
        question: "14. I wonder why (14)  ____ yet. I told Rick how to get here but perhaps I (15)____ a map. The traffic (16)____ them, of course. But I'm sure they would have telephoned us if they (17)____ lost. ",
        answers: {
          a: "they didn't arrive ",
          b: "didn't they arrive",
          c: "they haven't arrived",
          d: "haven't they arrived"
        },
        correctAnswer: "c"
      },
      
      {
        question: "15. I wonder why (14)  ____ yet. I told Rick how to get here but perhaps I (15)____ a map. The traffic (16)____ them, of course. But I'm sure they would have telephoned us if they (17)____ lost.",
        answers: {
          a: "should have given him",
          b: "had to give him",
          c: "give him",
          d: "must have given him"
        },
        correctAnswer: "a"
      },

      {
        question: "16. I wonder why (14)  ____ yet. I told Rick how to get here but perhaps I (15)____ a map. The traffic (16)____ them, of course. But I'm sure they would have telephoned us if they (17)____ lost.",
        answers: {
          a: "can delay",
          b: "may delay",
          c: "can have delayed",
          d: "may have delayed"
        },
        correctAnswer: "d"
      },
      
      {
        question: "17. I wonder why (14)  ____ yet. I told Rick how to get here but perhaps I (15)____ a map. The traffic (16)____ them, of course. But I'm sure they would have telephoned us if they (17)____ lost.",
        answers: {
          a: "would get",
          b: "had got",
          c: "would have got",
          d: "would be got"
        },
        correctAnswer: "c"
      },
      {
        question: "18. Yes, but by the time they (18)____ here , the dinner (19)____. What a nuisance! I (20)____ to all this trouble. I have been working for hours getting everything ready.",
        answers: {
          a: "will get",
          b: "would get",
          c: "get",
          d: "are getting"
        },
        correctAnswer: "c"
      },
      {
        question: "19. Yes, but by the time they (18)____ here , the dinner (19)____. What a nuisance! I (20)____ to all this trouble. I have been working for hours getting everything ready.",
        answers: {
          a: "has been spoilt ",
          b: "will be spoilt",
          c: "shall be spoilt",
          d: "is spilt"
        },
        correctAnswer: "b"
      },
      {
        question: "20. Yes, but by the time they (18)____ here , the dinner (19)____. What a nuisance! I (20)____ to all this trouble. I have been working for hours getting everything ready.",
        answers: {
          a: "needn't have gone ",
          b: "didn't need to go",
          c: "mustn't have gone",
          d: "hadn't to go"
        },
        correctAnswer: "a"
      },

      {
        question: "21. Choose the correct Answer. Only one answer is correct   Excuse me, Mrs. Jess. Would you mind (21)____ me a favor? I (22)____ shopping. But as soon as I shut my front door I realized I had left my key in the house.  ",
        answers: {
          a: "making ",
          b: "doing",
          c: "to make",
          d: "to do"
        },
        correctAnswer: "b"
      },
      
      {
        question: "22.  Excuse me, Mrs. Jess. Would you mind (21)____ me a favor? I (22)____ shopping. But as soon as I shut my front door I realized I had left my key in the house. ",
        answers: {
          a: "have just been",
          b: "have just gone",
          c: "would just go",
          d: "was just going"
        },
        correctAnswer: "d"
      },
      {
        question: "23. So when I get back I (23)____ get in. It was very silly of me. I (24)____ at all because all the groceries (25)____ I only wanted some mustard.",
        answers: {
          a: "can't",
          b: "won't be able to",
          c: "have't been able to",
          d: "could'nt"
        },
        correctAnswer: "b"
      },
      {
        question: "24. So when I get back I (23)____ get in. It was very silly of me. I (24)____ at all because all the groceries (25)____ I only wanted some mustard. ",
        answers: {
          a: "needn't have come out",
          b: "didn't need to come out",
          c: "mustn't have come out",
          d: "hadnt to come out"
        },
        correctAnswer: "a"
      },
      {
        question: "25. So when I get back I (23)____ get in. It was very silly of me. I (24)____ at all because all the groceries (25)____ I only wanted some mustard.",
        answers: {
          a: "have already been delivered",
          b: "already have delivered",
          c: "are being delivered already",
          d: "already are being delivered "
        },
        correctAnswer: "a"
      }
      
      
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
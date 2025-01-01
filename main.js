var button = document.querySelector('.yoo')
var background = document.querySelector('.main');
button.addEventListener('click', function(){
  var random = (Math.random() * 255)
var floor = Math.round(random)
var man = Math.random();

var two = (Math.random() * 255)
var twot = Math.round(two)

var three = (Math.random() * 255)
var threet = Math.round(three)
  background.style.backgroundColor = 'rgb(' + floor + ', ' + twot + ', ' + threet + ')'
  button.innerHTML = 'Weldone, Keep clicking'
  message.textContent = mean[Math.floor(man * mean.length)].message
  quote.textContent = mean[Math.floor(man * mean.length)].receiver
})


/* This is for the quote generator */
var quote = document.querySelector('#receiver')
var message = document.querySelector('#message')
var mean = [
  {
   'message' : '"For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."',
   
   'receiver' : ' - Jeremiah 29:11 (NIV)'
  },
  {
    'message' : '"Love is patient, love is kind. It does not envy, it does not boast, it is not proud."',
   'receiver' : '- 1 Corinthians 13:4 (NIV)'
  },
  {
    'message' : '"Come to me, all you who are weary and burdened, and I will give you rest."',
   'receiver' : '- Matthew 11:28 (NIV)'
  },
  {
    'message' : '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."',
   'receiver' : '- Philippians 4:6 (NIV)'
  },
  {
    'message' : '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."',
   'receiver' : '- Proverbs 3:5-6 (NIV)'
  },
  {
    'message' : '"You are the light of the world. A town built on a hill cannot be hidden."',
   'receiver' : '- Matthew 5:14 (NIV)'
  },
  {
    'message' : '"And now these three remain: faith, hope and love. But the greatest of these is love."',
   'receiver' : '- 1 Corinthians 13:13 (NIV)'
  },
  {
    'message' : '"I can do all this through him who gives me strength."',
   'receiver' : '- Philippians 4:13 (NIV)'
  },
  {
    'message' : '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."',
   'receiver' : '- John 3:16 (NIV)'
  },
  {
    'message' : '"Be still and know that I am God; I will be exalted among the nations, I will be exalted in the earth!"',
   'receiver' : '- Psalm 46:10 (NIV)'
  },
  {
    'message' : '"The Lord will fight for you; you need only to be still."',
   'receiver' : '- Exodus 14:14 (NIV)'
  },
  {
    'message' : '"We love because he first loved us."',
   'receiver' : '- 1 John 4:19 (NIV)'
  },
  {
    'message' : '"Cast all your anxiety on him because he cares for you."',
   'receiver' : '- 1 Peter 5:7 (NIV)'
  },
  {
    'message' : '"You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again?"',
   'receiver' : '- Matthew 5:13 (NIV)'
  },
  {
    'message' : '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."',
   'receiver' : '- Romans 8:28 (NIV)'
  }
  ]


console.log(mean[0].message)
console.log(Math.floor(Math.random() * mean.length))

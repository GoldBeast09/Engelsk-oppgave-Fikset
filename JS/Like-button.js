const likeButtonElement = document.getElementById('likeButton');
const likesTextElement = document.getElementById('likesText');

const randomNum = (x) => {
    return Math.floor(Math.random() * x);
}

const likeImage = () => {
    console.log(`This is your random number from 0 to 100: ${randomNum(100)}`);
    likesTextElement.textContent = randomNum(100);
};

likeButtonElement.addEventListener('click', likeImage);

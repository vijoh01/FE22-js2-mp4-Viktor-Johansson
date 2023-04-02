
const buttonContainer: any = document.querySelector('.buttons');
const screenInput: any = document.querySelector('.screenText');

const buttonArr: string[] = ["Clear", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "="];

const createButton = (value: string) => {
    const button: any = document.createElement("button");
    button.className = "button" + value;
    button.innerText = value;
    buttonContainer.append(button);
}

buttonArr.forEach(name => {
    createButton(name);
})

let done: boolean = false;
let text : string = "";
buttonContainer.addEventListener("click", (event: any) => {
    event.stopPropagation();
    event.preventDefault();

    if (event.target.classList.contains("button" + event.target.innerText)) {
        if (done) {
            text = "";
            screenInput.innerText = text;
            done = false;
        }
        switch (event.target.innerText) {
            case "Clear":
                text = "";
                screenInput.innerText = text;
                break;
            case "=":
                try {
                    const result = eval(text);
                    text += `=${result}`
                    screenInput.innerText = text;
                    done = true;
                } catch (error) {
                    screenInput.innerText = "Error";
                    done = true;
                }
                break;
            default:
                text += event.target.innerText
                screenInput.innerText = text;
                break;
        }

    }
});




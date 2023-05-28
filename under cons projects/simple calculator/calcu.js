// get input element
const input = document.getElementById("input");

// add number or operator to input
const addtoinput = (value) => {
    input.value += value;
};

const clearinput= () => {
    input.value="0";
};
const backspace = () => {
    input.value = input.value.slice(0,-1);
};

const calculate = () => {
    try
    {
        input.value = eval(input.value);

    }catch(error){
        input.value = "Error";
    }
};


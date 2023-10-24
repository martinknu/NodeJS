

function handleToggleClick(Message) {
    console.log(`My message is : ${Message}`);
  }


const Button001 = () => {
    return(
      <div>
        <button onClick={ () => {
            handleToggleClick("Yipiiii");
            handleToggleClick("Yes");
            handleToggleClick("No");
            }
            }>
        Click Me!
        </button>
      </div>
    )
    }

export default Button001;
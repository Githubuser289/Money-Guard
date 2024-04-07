import './Switch.css'
const Switch =({isToggled, onToggle}) =>{

    return (
        <>
        <div className='switchContainer'>
        <p>Income</p>
       <label className="switch">
        <input type="checkbox" checked = {isToggled} onChange={onToggle} /> 
        <span className="slider"/>
    </label>
    <p>Expense</p>
    </div>
    </>
    )

}
export default Switch;
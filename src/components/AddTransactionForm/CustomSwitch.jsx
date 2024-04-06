import { Minus, Plus, SlashContainer, Slider, SwitchContainer, Text, TextExpense } from "./CustomSwitch.styled";

export const CustomSwitch = ({ checked, onChange }) => {
    const handleSwitchChange = () => {
      onChange(!checked);
    };
  
    return (
      <>
      <SwitchContainer onClick={handleSwitchChange}>
        <Text checked={checked}>Income</Text>
        <TextExpense checked={checked}>Expense</TextExpense>
        <Slider checked={checked}>
          <Plus checked={checked}></Plus>
          <Minus checked={checked}></Minus>
        </Slider>
      </SwitchContainer>

       <SlashContainer onClick={handleSwitchChange}>
      <Text checked={checked}>Income</Text>
      <span>/</span>
      <TextExpense checked={checked}>Expense</TextExpense>
      </SlashContainer>
    </>
    );
  };
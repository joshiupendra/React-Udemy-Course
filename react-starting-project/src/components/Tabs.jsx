export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //ButtonsContainer should be capital to be used as a component and default value is "menu" but it can be passed different value

  return (<>
    <ButtonsContainer>
      {buttons}
    </ButtonsContainer>
    {children}
  </>);
}
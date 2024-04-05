const Header =()=>{
    const user = useSelector(selectUser);
    const [open, setOpen] = useState(false)
    
     const onOpenModal = ()=>setOpen(true);
     const onCloseModal = () => setOpen(false);
    
    return (
        <HeaderContainer>
            <div>
            <img src = {logo}/>
            </div>
    
            <RightSide>
        {user.name} 
        <div>|</div>
        <button onClick={onOpenModal} >
             <ExitIcon/>
         <span>Exit</span>
         </button>
        
        <Modal open = {open} onClose ={onCloseModal} center 
               classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
              }}>
            <LogoutForm/>
        </Modal>
    
        
         </RightSide>
        </HeaderContainer>
    )
    }
    export default Header;
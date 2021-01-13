import LayOut from '../slotComponent/LayOut'
function slotPage() {
  return (
    <LayOut showTopBar={false} showBottomBar={true}>
      {{
        content:(
          <div>
            <h3>1111111</h3>
          </div>
        )
      }}
    </LayOut>
  )
}
export default slotPage
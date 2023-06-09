import in_call_pic from "../components/List/assets/in_call.svg"
import out_call_pic from "../components/List/assets/out_call.svg";
import empty_call_pic from "../components/List/assets/empty_call.svg";
export const CallTypes = ({in_call, out_call, empty_call }) => {
  return (
    <div><img src={in_call? in_call_pic : out_call? out_call_pic : empty_call_pic } alt="call_type" /></div>
  )
}


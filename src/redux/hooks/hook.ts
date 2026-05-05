import { useSelector, useDispatch } from "react-redux";
import type { RooteState, DispatchType } from "../store/counterStore";

const useSelectorApp = useSelector.withTypes<RooteState>();
const dispatchApp = useDispatch.withTypes<DispatchType>();

export { useSelectorApp, dispatchApp };

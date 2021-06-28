import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../core";


const useThunkDispatch = (): AppDispatch => {
    return useDispatch<AppDispatch>();
};

export { useThunkDispatch };

import axios from 'axios';

export const getReplay = async(subsr) => {
    const result = await axios.post('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/mypage/replay', {subsr}); //("http://localhost:30/mypagereplay",{subsr})
    return result;
}
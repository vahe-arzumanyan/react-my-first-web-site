import React, {useState} from "react";
import sponsor1 from '../../../../assets/image/sponsor-img/sponsor1.jpg'
import sponsor2 from '../../../../assets/image/sponsor-img/sponsor2.jpg'
import sponsor3 from '../../../../assets/image/sponsor-img/sponsor3.jpg'
import sponsor4 from '../../../../assets/image/sponsor-img/sponsor4.jpg'
import sponsor5 from '../../../../assets/image/sponsor-img/sponsor5.jpg'
import sponsor6 from '../../../../assets/image/sponsor-img/sponsor6.jpg'
import sponsor7 from '../../../../assets/image/sponsor-img/sponsor7.jpg'
import sponsor8 from '../../../../assets/image/sponsor-img/sponsor8.jpg'
import sponsor9 from '../../../../assets/image/sponsor-img/sponsor9.jpg'
import sponsor10 from '../../../../assets/image/sponsor-img/sponsor10.jpg'
import sponsor11 from '../../../../assets/image/sponsor-img/sponsor11.jpg'
import sponsor12 from '../../../../assets/image/sponsor-img/sponsor12.jpg'

const useSponsor = () => {

    const [sponsorProduct, setSponsorProduct] = useState([
        {img:sponsor1},
        {img:sponsor2},
        {img:sponsor3},
        {img:sponsor4},
        {img:sponsor5},
        {img:sponsor6},
        {img:sponsor7},
        {img:sponsor8},
        {img:sponsor9},
        {img:sponsor10},
        {img:sponsor11},
        {img:sponsor12},
    ])
    return [sponsorProduct];

}

export default useSponsor;
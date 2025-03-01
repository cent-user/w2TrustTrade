import Image from 'next/image'
import creditCardSvg from '../../public/icon/credit-card.svg'
import clockSvg from '../../public/icon/clock.svg'
import dollarSignSvg from '../../public/icon/dollar-sign.svg'
import packageSvg from '../../public/icon/package.svg'
import truckSvg from '../../public/icon/truck.svg'
export default async function FeaturedProduct(){
    return(
        <>
            <section className='w-full relative text-primary5 bg-primary1' id="howToOrder">
                <div className='p-[3em]'>
                    <header>
                        <h3 className='font-h1 pb-[1em]'>How To Order</h3>
                    </header>
                    <div className='font-b1'>
                        <table className='clsHowToOrderTable'>
                            <tbody>
                            <tr>
                                <td>
                                <Image src={creditCardSvg} width={30} height={30} alt="TOP icon" className='mr-[1em] invert'/>
                                </td>
                                <td><b>Term Of Payment</b></td>
                                <td>70% Down Payment after Proforma Invoice Signed
                                , 30% Remaining Balance by Document Against Payment.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Image src={dollarSignSvg} width={30} height={30} alt="TOP icon" className='mr-[1em] invert'/>
                                </td>
                                <td><b>Pricing</b></td>
                                <td>US $ FOB Jakarta - Indonesia. &#40;call for detail / prices&#41;</td>
                            </tr>
                            <tr>
                                <td>
                                <Image src={clockSvg} width={30} height={30} alt="TOP icon" className='mr-[1em] invert'/>
                                </td>
                                <td><b>Delivery Time</b></td>
                                <td> 1 x 20 &quot; container, consists of 5-10 Items.</td>
                            </tr>
                            <tr>
                                <td>
                                <Image src={truckSvg} width={30} height={30} alt="TOP icon" className='mr-[1em] invert'/>
                                </td>
                                <td><b>Minimum Order</b></td>
                                <td>70% Down Payment after Proforma Invoice Signed
                                , 30% Remaining Balance by Document Against Payment.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Image src={packageSvg} width={30} height={30} alt="TOP icon" className='mr-[1em] invert'/>
                                </td>
                                <td><b>Packaging</b></td>
                                <td> Double Wall cart carton box, with styrofoam / cardboard protection.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
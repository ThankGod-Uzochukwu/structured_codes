import { View, Text, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import ViewPager from "@react-native-community/viewpager";
import Page from './Page';
import { BACKGROUND } from '../../utils/Colors';





const pageDetails = [
    {
        title: "Choose and customize your " + " drinks with simplicity",
        message: "You want your drink and " + 
                "you want it your way so be " + 
                "bold and customize the way " + 
                " that makes you the happiest!"
    },
    {
        title: "No time to waste when you need your coffee",
        message: "We’ve crafted a quick and " + " easy way for you to order " + 
                "your favorite coffee or treats thats fast! "
    },
    {
        title: "Who doesn’t love rewards? We LOVE rewards!",
        message: "If you’re like us you love " + " getting freebies and rewards! " + 
                "That’s why we have the best " + " reward program in the coffee game!"
    },
]

const Pager = () => {
    // const dispatch = useDispatch()

    const page = useRef(null)
    
    // const skipPage = () => dispatch()
    const skipPage = a => page?.current?.setPage(a + 3)
    const next = a => page?.current?.setPage(a + 1)

  return (
    <SafeAreaView flex backgroundColor={BACKGROUND}>
        <ViewPager flex initialPage={0} ref={page}>
            {pageDetails.map((details, _) => (
                <Page key={_} {...details} index={_} next={next} skip={skipPage}/>
            ))}
        </ViewPager>
    </SafeAreaView>
  )
}

export default Pager
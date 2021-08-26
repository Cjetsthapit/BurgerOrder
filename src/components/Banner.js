import React from 'react';
import banner from  '../images/banner.png';
import logo from  '../images/logo.png';
import bannerpic from  '../images/bannerpic.png';
import {makeStyles,Typography,Grid,Container, Box,spacing, Link} from '@material-ui/core';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
// const theme = {
//     spacing: [8],
//   }
const useStyles = makeStyles({
  banner:{
    backgroundImage:`url(${banner})`,
    width:'100%',
    height:'100vh',
    backgroundSize:'cover',
  },
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    margin:'0 auto'
  },
  leftContainer:{
    width:'40%',
  },
  rightContainer:{
    width:'60%',
  },
  image:{
    width:'100%'
  },
  logo:{
    width:'40%',
  },
  grid:{
    padding:'25px 0 0 0',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
  },
  menu:{
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  link:{
      marginLeft:35,
      letterSpacing:2,
      padding:5,
      '&:hover':{border:'2px dashed #3d2514' }
  },
  bold:{
    fontSize:80,
    letterSpacing:5,
    fontFamily: 'Alfa Slab One', 
    color:'#3d2514',
    textShadow:'3px 2px 2px white',
    marginTop:-10
  },
  box:{
      padding:1,
      textTransform:'uppercase',
      fontWeight:400,
      width:330,
      color:'#3d2514',
      border:'2px dashed #3d2514'
  }


})

const Banner=(props)=>{
    const classes = useStyles();
    return(
        <div className={classes.banner}>
            <Container>
           <Box className={classes.grid}>
                <Box ><img src={logo} className={classes.logo}/></Box>
                <Box >
                    <Typography  variant="h6"><DirectionsBikeIcon  />
                        <Box component="span" p={2} >+1 234 567 890</Box>
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.menu}>
                <Typography ><Link className={classes.link} href="#" color="textPrimary" underline="none">HOME</Link></Typography>
                <Typography><Link className={classes.link}  href="#" color="textPrimary" underline="none">MENU</Link></Typography>
                <Typography><Link className={classes.link} href="#" color="textPrimary" underline="none">OUR STORY</Link></Typography>
                <Typography><Link className={classes.link} href="#" color="textPrimary" underline="none">CONTACT US</Link></Typography>
            </Box>
            </Container>
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                <Typography class={classes.box} variant="h5">It is a good time for the great taste of burgers</Typography>
                    <Typography class={classes.bold} variant="h1">BURGER WEEK</Typography>
                </div>
                <div className={classes.rightContainer}>
                <img src={bannerpic} className={classes.image}/>
                </div>
            </div>
        </div>
    )
}
export default Banner;
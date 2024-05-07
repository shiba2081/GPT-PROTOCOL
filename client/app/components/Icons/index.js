
import Network1 from '@/app/assets/svgs/Home/network1.svg'
import Network2 from '@/app/assets/svgs/Home/network2.svg'
import Network3 from '@/app/assets/svgs/Home/network3.svg'
import RightArrow from '@/app/assets/svgs/Home/rightArrow.svg'
import LeftArrow from '@/app/assets/svgs/Home/leftArrow.svg'
import ArrowLeft from '@/app/assets/svgs/Home/arrowLeft.svg'

import Discord from '@/app/assets/svgs/footer/discord.svg'
import Telegram from '@/app/assets/svgs/footer/telegram.svg'
import Instagram from '@/app/assets/svgs/footer/instagram.svg'
import X from '@/app/assets/svgs/footer/x.svg'
import FooterLogo from '@/app/assets/svgs/footer/footerLogo.svg'
import HeaderLogo from '@/app/assets/svgs/header/header.svg'

import UpArrow from '@/app/assets/svgs/header/up-arrow.svg'

import Spiral from '@/app/assets/svgs/Build/spiral.svg'

import Gov1 from '@/app/assets/svgs/Network/gov1.svg'
import Gov2 from '@/app/assets/svgs/Network/gov2.svg'
import Gov3 from '@/app/assets/svgs/Network/gov3.svg'
import Gov4 from '@/app/assets/svgs/Network/gov4.svg'

import Sec1 from '@/app/assets/svgs/Network/sec1.svg'
import Sec2 from '@/app/assets/svgs/Network/sec2.svg'
import Sec3 from '@/app/assets/svgs/Network/sec3.svg'
import Sec4 from '@/app/assets/svgs/Network/sec4.svg'

const Icon = (props) => {
    const {name,fill,width,height} = props;

    return (
        <>
            {
                name === 'net1'? (
                    <Network1 fill={fill} width={width} height={height} />
                ):name === 'net2'? (
                    <Network2 fill={fill} width={width} height={height} />
                ):name === 'net3'? (
                    <Network3 fill={fill} width={width} height={height} />
                ):name === 'discord'? (
                    <Discord fill={fill} width={width} height={height} />
                ):name === 'instagram'? (
                    <Instagram fill={fill} width={width} height={height} />
                ):name === 'telegram'? (
                    <Telegram fill={fill} width={width} height={height} />
                ):name === 'x'? (
                    <X fill={fill} width={width} height={height} />
                ):name === 'footer'? (
                    <FooterLogo fill={fill} width={width} height={height} />
                ):name === 'header'? (
                    <HeaderLogo fill={fill} width={width} height={height} />
                ):name === 'spiral'? (
                    <Spiral fill={fill} width={width} height={height} />
                ):name === 'right-arrow'? (
                    <RightArrow fill={fill} width={width} height={height} />
                ):name === 'left-arrow'? (
                    <LeftArrow fill={fill} width={width} height={height} />
                ):name === 'gov1'? (
                    <Gov1 fill={fill} width={width} height={height} />
                ):name === 'gov2'? (
                    <Gov2 fill={fill} width={width} height={height} />
                ):name === 'gov3'? (
                    <Gov3 fill={fill} width={width} height={height} />
                ):name === 'gov4'? (
                    <Gov4 fill={fill} width={width} height={height} />
                ):name === 'sec1'? (
                    <Sec1 fill={fill} width={width} height={height} />
                ):name === 'sec2'? (
                    <Sec2 fill={fill} width={width} height={height} />
                ):name === 'sec3'? (
                    <Sec3 fill={fill} width={width} height={height} />
                ):name === 'sec4'? (
                    <Sec4 fill={fill} width={width} height={height} />
                ):name === 'arrow-left'? (
                    <ArrowLeft fill={fill} width={width} height={height} />
                ):name === 'up-arrow'? (
                    <UpArrow fill={fill} width={width} height={height} />
                ):
                
                null
            }
        </>
    );
};

export default Icon;
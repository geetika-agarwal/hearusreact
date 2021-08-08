import React from 'react'
import { AiFillStar, AiOutlineCaretRight, AiOutlineStar } from 'react-icons/ai'
import { BookNowBtn, BookNowBtnWrap, DetailStars, ImgWrap, PsycologistDetail, PsycologistDetailAvailable, PsycologistDetailColumn, PsycologistDetailContainer, PsycologistDetailHomeTown, PsycologistDetailImg, PsycologistDetailName, PsycologistDetailProfession, PsycologistDetailRow, PsycologistDivide } from './PsychologistElements'

const PyschologistComponent = ({img, name, profession, hometown, desc1, desc2, desc3, available, href}) => {
    return (
        <PsycologistDetail>
            <PsycologistDetailContainer>
                <PsycologistDetailRow>

                    <PsycologistDetailColumn xs={12} md={6} lg={3}>
                        <ImgWrap><PsycologistDetailImg src={img} alt="pyschologist" /></ImgWrap>
                    </PsycologistDetailColumn>

                    <PsycologistDetailColumn xs={12} md={6} lg={9}>
                        <PsycologistDetailName>{name}</PsycologistDetailName>
                        <PsycologistDetailProfession>{profession}</PsycologistDetailProfession>
                        <PsycologistDetailHomeTown>{hometown}</PsycologistDetailHomeTown>
                        <DetailStars><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /></DetailStars>
                    </PsycologistDetailColumn>

                </PsycologistDetailRow>

                <PsycologistDivide />

                <PsycologistDetailRow>

                    <PsycologistDetailColumn xs={12}>
                        <h3 style={{color: "#254547"}}>Description</h3>
                        <br />
                        <ul style={{lineHeight: "2rem", color: "#5f5f5f"}}>
                            <li><AiOutlineCaretRight />{desc1}</li>
                            <li><AiOutlineCaretRight />{desc2}</li>
                            <li><AiOutlineCaretRight />{desc3}</li>
                        </ul>
                    </PsycologistDetailColumn>

                </PsycologistDetailRow>

                <PsycologistDivide />

                <PsycologistDetailRow>

                    <PsycologistDetailColumn xs={12}>
                        <h3 style={{color: "#254547"}}>Availability</h3>
                        <br />
                        <PsycologistDetailAvailable>{available}</PsycologistDetailAvailable>
                    </PsycologistDetailColumn>

                </PsycologistDetailRow>
            </PsycologistDetailContainer>
            <BookNowBtnWrap>
                <a href={href}> <BookNowBtn>Book Now</BookNowBtn> </a>
            </BookNowBtnWrap>
        </PsycologistDetail>
    )
}

export default PyschologistComponent

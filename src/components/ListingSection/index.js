import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ListingContainer, PsychologistProfession, PyschologistColumn, PyschologistContainer, PyschologistHomeTown, PyschologistImg, PyschologistName, PyschologistRow, Stars } from './ListingSectionElements';

const ListingSection = ({to, id, img, name, profession, hometown}) => {
    return (
        <Link to ={to} style={{textDecoration: "none", color: "#254547"}}>
            <ListingContainer id={id}>
            <PyschologistContainer>
                <PyschologistRow>
                    <PyschologistColumn xs={12} md={6} lg={2}>
                        <PyschologistImg src={img} alt="Pyschologist"/>
                    </PyschologistColumn>
                    <PyschologistColumn xs={12} md={6} lg={8}>
                        <PyschologistName>{name}</PyschologistName>
                        <PsychologistProfession>{profession}</PsychologistProfession>
                        <br />
                        <PyschologistHomeTown>{hometown}</PyschologistHomeTown>
                        <Stars> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> <AiOutlineStar /></Stars>
                    </PyschologistColumn>
                </PyschologistRow>
            </PyschologistContainer>
        </ListingContainer>
        </Link>
    )
}

export default ListingSection

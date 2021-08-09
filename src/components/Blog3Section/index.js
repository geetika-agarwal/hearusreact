import React from 'react'
import { BlogBackground, BlogBackgroundImg, BlogContent, BlogHeading, BlogList, BlogParagraph } from '../Blog1Section/Blog1Elements'
import blogBackground from '../../images/blog-background-3.png';
import { AiFillCaretRight } from 'react-icons/ai';
import ScrolltoTop from '../ScrollToTop';

const Blog3Section = () => {
    return (
        <>
            <ScrolltoTop />
            <BlogBackground>
                <BlogBackgroundImg src={blogBackground} />    
            </BlogBackground>   
            <BlogContent>
                <BlogHeading>Why do some people don't feel comfortable talking about their feelings?</BlogHeading>
                <BlogParagraph>When your car breaks down, you either know how to repair it or how to find someone who can. Emotions, on the opposite hand, are a bit harder to repair. there's no wrench you can grab or shop you'll take your feelings to. But you do have one tool in your kit that you can use: talking about your feelings. Even just speaking about your feelings out loud to a different person can help. So why do we avoid it or believe it doesn’t work when it's the most effective way?</BlogParagraph>
                <BlogParagraph>There are many potential reasons, counting on who you're talking about. Some people just do not like feeling vulnerable, even though they're very social. Some people are just private by nature. Some people think they can handle their problems alone. Talking to someone about your problems can make a lot of difference. You might not be comfortable with that but you can chat with our free trained listeners. It will lighten up your mood and help you feel a lot better.</BlogParagraph>
                <BlogParagraph>When we discuss talking about your problems, it can take a couple of forms.</BlogParagraph>
                <BlogList>
                    <li><AiFillCaretRight />Venting to a trusted friend. Sometimes you simply need to unleash how you’re feeling with no real plan for an answer. “I had the worst day at work!” are often the beginning of a conversation that helps you process the strain of a tough day.</li>
                    <li><AiFillCaretRight />Talk therapy with a licensed therapist. People need therapy when they have problems they cannot deal with alone. Therapy helps people point out their feelings. It helps them to work on problems and learn new skills. once they try this, they begin to communicate better and do better. People need therapy for various reasons. Some people need it for a mental disorder. Others need it to boost their attention, learning, and focus. Everyone deserves help to take care of problems.</li>
                </BlogList>
                <BlogParagraph>It is not easy to open up to someone, for that we can help you. We provide a platform where you can chat with trained listeners for free
                    (<a href="http://www.hearus.me/">http://www.hearus.me/</a>). You can download the app from google play store (Hear Us - Trained Listeners, Wellness & Therapy). It is totally confidential so you don’t need to worry about anything. We hope this can help you.
                </BlogParagraph>
            </BlogContent>
        </>
    )
}

export default Blog3Section

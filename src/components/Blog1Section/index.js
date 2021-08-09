import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import blogBackround from '../../images/blog-background-1.jpg';
import { BlogBackground, BlogBackgroundImg, BlogContent, BlogHeading, BlogList, BlogParagraph, BlogSubheading } from './Blog1Elements';
import ScrolltoTop from '../ScrollToTop';

const Blog1Section = () => {
    return (
        <>
            <ScrolltoTop />
            <BlogBackground>
                <BlogBackgroundImg src={blogBackround} />   
            </BlogBackground>   
            <BlogContent>
                <BlogHeading>How does depression differ from sadness?</BlogHeading>
                <BlogParagraph>Everyone experiences a bad day now and again—a painful argument with a spouse, the loss of a beloved pet, getting left out for a promotion, and other everyday disappointments—can make us feel awful. Sadness is a normal emotion that should dissolve over time but when that melancholy isn’t temporary, the danger of depression could also be on the horizon.</BlogParagraph>
                <BlogSubheading>SADNESS:</BlogSubheading>
                <BlogParagraph>Sadness could also be a person's emotion that everyone people feel at certain times during their lives. Feeling sad is a natural reaction to situations that cause emotional upset or pain. There are varying degrees of sadness. But like other emotions, sadness is temporary too and it fades away with time. During this way, sadness differs from depression. But there may be periods of levity and less severe mood. Sadness can even sometimes be relieved by venting, crying, exercising or other methods of releasing emotion.
                    (<a href="https://www.healthline.com/health/mental-health/why-am-i-sad-for-no-reason">https://www.healthline.com/health/mental-health/why-am-i-sad-for-no-reason</a>).
                </BlogParagraph>
                <BlogParagraph>Sadness usually passes with time. If it doesn't pass, or if the person becomes unable to resume normal function, this might be a symptom of depression.</BlogParagraph>
                <BlogParagraph>If low mood gets worse or lasts longer than 2 weeks, the person should ask their doctor.</BlogParagraph>
                <br />
                <BlogSubheading>DEPRESSION:</BlogSubheading>
                <BlogParagraph>Depression is a longer-term mental disease. It impairs social, occupational, and other important areas of functioning. Left untreated, symptoms of depression may last for an extended time.</BlogParagraph>
                <BlogParagraph>Depression may be a psychological disorder that has an overwhelming effect on many parts of a person’s life. It can occur in people of any gender or age and depression differs from person to person.</BlogParagraph>
                <br />
                <BlogSubheading>SYMPTOMS:</BlogSubheading>
                <BlogParagraph>When you’re sad, it's going to feel all-encompassing sometimes. But you ought to even have moments once you are ready to laugh or be comforted. Depression differs from sadness. The emotions you've got will affect all aspects of your life. it's going to be hard or maybe impossible to seek out enjoyment in anything, including activities and other people you wont to enjoy. Depression may be a mental disease, not an emotion. You can read more about the signs of depression given below.
                    (<a href="https://www.healthline.com/health/depression/recognizing-symptoms#hopelessoutlook">https://www.healthline.com/health/depression/recognizing-symptoms#hopelessoutlook</a>).
                </BlogParagraph>
                <BlogParagraph>These are the most common symptoms of Depression:</BlogParagraph>
                <BlogList>
                    <li><AiFillCaretRight />A lack of interest and delight in activities you used to find pleasurable.</li>
                    <li><AiFillCaretRight />Having difficulty sleeping or excessive amount of sleeping.</li>
                    <li><AiFillCaretRight />Trouble eating, including eating excesive amount of, or maybe insufficient, which may end in unwanted weight gain or loss.</li>
                    <li><AiFillCaretRight />Feeling restlessness, irritability or agitation throughout the day.</li>
                    <li><AiFillCaretRight />Extreme fatigue or loss of energy.</li>
                    <li><AiFillCaretRight />Unwanted feelings about yourself or guilt.</li>
                    <li><AiFillCaretRight />Thoughts of suicide, or thinking very often about death and dying.</li>
                </BlogList>
                <BlogParagraph>You may have a number of these symptoms if you're sad, but they shouldn’t last more than a period of two weeks. Suicidal thoughts are a symptom of depression, not sadness. Knowing the difference between sadness and depression is important for improving wellbeing.</BlogParagraph>
                <br />
                <BlogSubheading>TREATMENT FOR DEPRESSION:</BlogSubheading>
                <BlogParagraph>If an individual has symptoms of depression for more than 2 weeks, they must seek professional help.</BlogParagraph>
                <BlogParagraph>A physician can help to see the extent of treatment necessary to manage symptoms.</BlogParagraph>
                <BlogParagraph>Possible treatments include medication, counselling, and psychotherapy. 
                    (<a href="https://www.healthline.com/health/depression">https://www.healthline.com/health/depression</a>)
                </BlogParagraph>
                <br />
                <BlogSubheading>TREATMENT FOR SADNESS:</BlogSubheading>
                <BlogParagraph>If you’re experiencing sadness due to any reason, a few minor lifestyle changes may help.</BlogParagraph>
                <BlogList>
                    <li><AiFillCaretRight />Connect with people. Make a call, take a yoga class, or join a jogging club, knitting circle, or another group that interests you.</li>
                    <li><AiFillCaretRight />Build in time daily for an activity you enjoy.</li>
                    <li><AiFillCaretRight />Watch funny shows or movies, or read a light or funny book.</li>
                    <li><AiFillCaretRight />Engage in physical activities or sports.</li>
                    <li><AiFillCaretRight />If you like animals, spend time every day with a furry friend.</li>
                    <li><AiFillCaretRight />Do not self-medicate through the use of cigarette or alcohol.</li>
                    <li><AiFillCaretRight />Treat yourself kindly by eating healthy and trying to induce enough sleep.</li>
                    <li><AiFillCaretRight />If you've got trouble sleeping, try meditating or taking a warm bath before bed.</li>
                </BlogList>
                <BlogParagraph>It is not easy to cope up with sadness, talking about it can help you. For that, we provide a platform where you can chat with trained listeners for free 
                    (<a href="https://hearus.me/">https://hearus.me/</a>). You can download the app from google play store (Hear Us - Trained Listeners, Wellness & Therapy). We hope we were able to help you. WE DO NOT PROMOTE SELF DIAGNOSIS.
                </BlogParagraph>
            </BlogContent>
        </>
    )
}

export default Blog1Section

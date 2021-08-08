import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';
import blogBackground from '../../images/blog-background-2.jpg';
import { BlogBackground, BlogBackgroundImg, BlogContent, BlogHeading, BlogList, BlogParagraph, BlogSubheading } from '../Blog1Section/Blog1Elements';
import ScrolltoTop from '../ScrollToTop';

const Blog2Section = () => {
    return (
        <>
            <ScrolltoTop />
           <BlogBackground>
                <BlogBackgroundImg src={blogBackground}  />
            </BlogBackground> 
            <BlogContent>
                <BlogHeading>What is Anxiety? How to deal with it?</BlogHeading>
                <BlogParagraph>Anxiety is your body’s natural response to stress. It’s a sense of fear in our mind about what will happen and what won’t. The first day of college, planning to go for an employment interview, or giving a speech may cause most of the people to feel fearful and nervous. It’s normal to feel anxious about starting something new and it might be unpleasant for you too, but it may help you to work harder towards your goal.</BlogParagraph>
                <BlogParagraph>But if your feelings of tension are extreme and it interferes with your personal life then it might be a problem which needs to be addressed.</BlogParagraph>
                <BlogSubheading>What are the different types of anxiety disorder?</BlogSubheading>
                <BlogParagraph>Anxiety might be a key part of several different disorders. These include:</BlogParagraph>
                <BlogList>
                    <li><AiFillCaretRight />
                        <b>Panic Disorders: </b> In panic disorder you might experience difficulty in doing anything or recurring panic attacks at unexpected times. A person with mental disorder may have trouble sleeping due to fear of subsequent scare.
                    </li>
                    <li><AiFillCaretRight />
                        <b>Phobia: </b>It is an excessive fear of a specific object, situation, or activity.
                    </li>
                    <li><AiFillCaretRight />
                        <b>Social Anxiety Disorder: </b>In this, you may feel extreme fear of being judged by others in social situations.
                    </li>
                    <li><AiFillCaretRight />
                        <b>Obsessive Compulsion Disorder: </b>In this you might have recurring irrational thoughts that may lead you to perform specific, repeated behaviors.
                    </li>
                    <li><AiFillCaretRight />
                        <b>Seperation Anxiety Disorder: </b>It is the fear of being away from home or loved ones.
                    </li>
                    <li><AiFillCaretRight />
                        <b>Illness Anxiety Disorder: </b>In this anxiety occurs due to your health (formerly called hypochondria).
                    </li>
                    <li><AiFillCaretRight />
                        <b>Post-Traumatic Stress Disorder (PTSD): </b>This is one of the major reasons of having anxiety. In this anxiety occurs after following a traumatic event. (https://www.psychiatry.org/patients-families/ptsd/what-is-ptsd).
                    </li>
                </BlogList>
                <br />
                <BlogSubheading>Symptoms of Anxiety:</BlogSubheading>
                <BlogParagraph>Anxiety is different looking at the person experiencing it. Feelings can differ from butterflies in your stomach to a racing heart. You'll feel out of control, like there’s a disconnect between your mind and body.</BlogParagraph>
                <BlogParagraph>Other ways people may experience anxiety includes nightmares, panic attacks, and painful thoughts or memories that you simply can’t control. you'll have a general feeling of fear and worry all over your body, otherwise may also fear a specific place or event.</BlogParagraph>
                <BlogParagraph>Symptoms of anxiety usually includes:</BlogParagraph>
                    <BlogList>
                        <li><AiFillCaretRight />Increased heart rate during unexpected times.</li>
                        <li><AiFillCaretRight />Rapid breathing that you do not have any control over.</li>
                        <li><AiFillCaretRight />Restlessness almost all the time.</li>
                        <li><AiFillCaretRight />Trouble concentrating on basic things like reading or even driving.</li>
                        <li><AiFillCaretRight />Difficulty falling asleep even if you are tired.</li>
                    </BlogList>
                <BlogParagraph>Your anxiety symptoms could be totally different from someone else’s. That’s why it’s important to understand all the ways anxiety can happen. 
                    <b>Examine the various sorts of anxiety symptoms you would possibly experience. </b>
                    (<a href="https://www.healthline.com/health/anxiety-symptoms">https://www.healthline.com/health/anxiety-symptoms</a>).
                </BlogParagraph>
                <BlogSubheading>Few tips which might help relieve your anxiety:</BlogSubheading>
                <BlogParagraph>Lifestyle changes are often an efficient way to relive a number of problems that may interfere in your life and anxiety you may deal with on a daily basis.</BlogParagraph>
                <BlogParagraph>The following list can help you deal with your anxiety:</BlogParagraph>
                <BlogList>
                    <li><AiFillCaretRight />Getting enough sleep can help you a lot if you’re going through something. It helps you deal with your stress levels.</li>
                    <li><AiFillCaretRight />Meditating is one of the most effective way to reduce anxiety.</li>
                    <li><AiFillCaretRight />You should stay active and exercise, even walking a little bit can help you.</li>
                    <li><AiFillCaretRight />Try eating a healthy diet. Avoid junk food.</li>
                    <li><AiFillCaretRight />Try to avoid alcohol, it’s one of the major triggers for anxiety or stress.</li>
                    <li><AiFillCaretRight />Try avoiding caffeine. That may sound difficult but you can replace it with water or herbal tea.</li>
                    <li><AiFillCaretRight />Try to quit smoking cigarettes. You can replace it with chewing gums.</li>
                </BlogList>
                <BlogParagraph>If these lifestyle changes appear to be a positive thing for you to eliminate some anxiety, examine how each works—plus, 
                    <b>et more great ideas for treating anxiety. </b>
                    (<a href="https://www.healthline.com/health/natural-ways-to-reduce-anxiety">https://www.healthline.com/health/natural-ways-to-reduce-anxiety</a>).
                </BlogParagraph>
                <BlogParagraph>It is not easy to cope up with anxiety alone, talking about it can reduce stress as well. For that, we provide a platform where you can chat with trained listeners for free 
                    (<a href="https://hearus.me/">https://hearus.me/</a>).
                    You can download the app from google play store (Hear Us - Trained Listeners, Wellness & Therapy). We hope we were able to help you reduce anxiety.
                </BlogParagraph>
            </BlogContent>
        </>
    )
}

export default Blog2Section

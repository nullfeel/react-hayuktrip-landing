import React from 'react'

import { Helmet } from 'react-helmet'

import Download from '../components/download'
import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import Description from '../components/description'
import LinkIconButton from '../components/link-icon-button'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>HayukTrip</title>
        <meta
          name="description"
          content="We provide the best travel service."
        />
        <meta property="og:title" content="HayukTrip" />
        <meta
          property="og:description"
          content="We provide the best travel service."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca69340d-bb34-4036-818f-53a869855e42/679286ad-a4b9-4b3f-84e6-deee550cf66a?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['Main']}>
        <div className={styles['BlurBackground']}></div>
        <header className={styles['Header']}>
          <div className={styles['Logo']}>
            <img
              alt="image"
              src="/playground_assets/logo-200w.png"
              className={styles['image']}
            />
          </div>
          <div className={styles['Menu']}>
            <span className={styles['text']}>About</span>
            <span className={styles['text01']}>Pricing</span>
            <span className={styles['text02']}>Blog</span>
          </div>
          <div className={styles['container01']}>
            <a
              href="https://github.com/nullfeel/hayuktrip_app"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link']}
            >
              <Download className={styles['component']}></Download>
            </a>
          </div>
          <svg viewBox="0 0 1024 1024" className={styles['Menu1']}>
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </header>
        <div className={styles['Hero']}>
          <div className={styles['container02']}>
            <h1
              className={` ${styles['text03']} ${projectStyles['headline1']} `}
            >
              <span>
                We provide
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>the</span>
              <br></br>
              <span></span>
              <span>best travel service</span>
            </h1>
            <a
              href="https://github.com/nullfeel/hayuktrip_app"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link1']}
            >
              <PrimaryButton
                button="Download"
                className={styles['component01']}
              ></PrimaryButton>
            </a>
          </div>
          <img
            alt="image"
            src="/playground_assets/1637808211068-jv_8im9wh-transformed-1500h.png"
            loading="lazy"
            className={styles['image1']}
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className={styles['TurquoiseCirble']}
        />
        <img
          alt="image"
          src="/playground_assets/daco_2592088-1500h.png"
          className={styles['PurpleCircle']}
        />
      </div>
      <div className={styles['Features']}>
        <h2 className={` ${projectStyles['headline2']} ${styles['text09']} `}>
          HayukTrip Mobile App
        </h2>
        <span className={styles['text10']}>
          <span className={styles['text11']}>
            We build this app using flutter
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className={styles['Features1']}>
          <FeatureCard
            title="Flexibility"
            image_src="/playground_assets/02.svg"
          ></FeatureCard>
          <FeatureCard
            title="User friendly"
            image_src="/playground_assets/03.svg"
          ></FeatureCard>
          <FeatureCard
            title="Multiple layouts"
            image_src="/playground_assets/04.svg"
          ></FeatureCard>
        </div>
      </div>
      <div className={styles['Testimonials']}>
        <div className={styles['container03']}>
          <div className={styles['container04']}>
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className={styles['image2']}
            />
            <h1
              className={` ${styles['text12']} ${projectStyles['headline2']} `}
            >
              Real Stories from Real Customers
            </h1>
            <span>Get inspired by these stories.</span>
            <div className={styles['container05']}>
              <TestimonialsCard image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></TestimonialsCard>
            </div>
          </div>
          <div className={styles['container06']}>
            <div className={styles['container07']}>
              <TestimonialsCard
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                text="Hayuktrip is my preferred app for finding cheap trip package. "
                text1="Jane Cooper"
                text2="HayukTrip Testimony"
                image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              ></TestimonialsCard>
            </div>
            <div className={styles['container08']}>
              <TestimonialsCard
                text="HayukTrip saved our time in picking the best place to go."
                text1="Kristin Watson"
                text2="HayukTrip Testimony"
                image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              ></TestimonialsCard>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Achievements']}>
        <div className={styles['container09']}>
          <h2 className={styles['text14']}>
            <span className={styles['text15']}>
              Our 1 years of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>achievements</span>
          </h2>
          <span className={styles['text17']}>
            <span className={styles['text18']}>
              With our super powers we have reached this
            </span>
          </span>
        </div>
        <div className={styles['container10']}>
          <div className={styles['container11']}>
            <Description
              number="10,000+"
              image_src="/playground_assets/01.svg"
              description="Downloads per day"
            ></Description>
            <Description
              number="2 Milion"
              image_src="/playground_assets/04.svg"
              description="Users"
            ></Description>
          </div>
          <div className={styles['container12']}>
            <Description number="500+" description="Clients"></Description>
            <Description
              number="140"
              image_src="/playground_assets/07.svg"
              description="Countries"
            ></Description>
          </div>
        </div>
      </div>
      <div className={styles['Feature1']}>
        <div className={styles['container13']}>
          <img
            alt="image"
            src="/playground_assets/1637808205207-r_hrx3_pc-transformed-1500h.png"
            loading="lazy"
            image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
            className={styles['image3']}
          />
        </div>
        <div className={styles['container14']}>
          <h3 className={projectStyles['headline3']}>We create simple UX</h3>
          <span className={` ${styles['text20']} ${projectStyles['lead1']} `}>
            <span className={styles['text21']}>
              Design teams use to create products that provide meaningful and
              relevant experiences to users.
            </span>
          </span>
          <LinkIconButton text="Get Started"></LinkIconButton>
        </div>
      </div>
      <div className={styles['Feature2']}>
        <div className={styles['container15']}>
          <h2 className={` ${projectStyles['headline2']} ${styles['text22']} `}>
            <span className={styles['text23']}>
              See the world. Its more fantastic than any dream.
            </span>
          </h2>
          <span className={` ${styles['text24']} ${projectStyles['lead1']} `}>
            <span className={styles['text25']}>
              Throughout our lives, people have thought that because we keep
              traveling and searching for new things to do, we are not focused.
              They have often thought we were flaky or unfocused. But travel
              helped us find our purpose and put focus into our lives. The more
              we got lost in our travels, the richer our lives became.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/afif-kusuma-essyeoq4s9u-unsplash-1500w.jpg"
          image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className={styles['image4']}
        />
      </div>
      <div className={styles['CTA']}>
        <div className={styles['container16']}>
          <div className={styles['container17']}>
            <h2
              className={` ${styles['text26']} ${projectStyles['headline2']} `}
            >
              <span className={styles['text27']}>
                Manage your projects from your mobile
              </span>
            </h2>
            <span className={` ${styles['text28']} ${projectStyles['lead1']} `}>
              <span className={styles['text29']}>
                Download the app to buy our services and get the best travel
                experience.
              </span>
            </span>
            <span
              className={` ${styles['text30']} ${projectStyles['subtitle2']} `}
            >
              <span className={styles['text31']}>Get the App</span>
            </span>
            <a
              href="https://github.com/nullfeel/hayuktrip_app"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link2']}
            >
              <Download className={styles['component13']}></Download>
            </a>
          </div>
          <div className={styles['container18']}>
            <img
              alt="image"
              src="/playground_assets/1637808205207-r_hrx3_pc-transformed-1500h.png"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className={styles['image5']}
            />
            <img
              alt="image"
              src="/playground_assets/1637808211068-jv_8im9wh-transformed-1500h.png"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className={styles['image6']}
            />
          </div>
        </div>
      </div>
      <div className={styles['Footer']}>
        <footer className={styles['container19']}>
          <div className={styles['Divider']}></div>
          <div className={styles['container20']}>
            <span className={` ${styles['text32']} ${projectStyles['body2']} `}>
              © 2020 HayukTrip. All rights reserved
            </span>
            <div className={styles['container21']}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link3']}
              >
                <div className={styles['container22']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon3']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link4']}
              >
                <div className={styles['container23']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon5']}>
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home

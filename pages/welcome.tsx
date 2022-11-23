import type { NextPage } from "next";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Navbar, SvgMorph } from "../components";
import styles from "../styles/Welcome.module.css";
import { motion } from "framer-motion";
import { useWindowSize } from "../utils";
import useI18n from "../i18n";
import Head from "next/head";

const Welcome: NextPage = () => {
  const windowSize = useWindowSize();
  const { S, formatString } = useI18n();

  return (
    <>
      <Head>
        <title>{formatString(S.title, S.welcome)}</title>
      </Head>
      <main className={styles.wrapper}>
        <Navbar logo />
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          {/* Page 1 */}
          <ParallaxLayer offset={0} speed={0.2}>
            <SvgMorph
              width={windowSize?.width ?? 900}
              height={windowSize?.height ?? 600}
              duration={5000}
              fill={"#ffaa00"}
              pathA={
                "M0 321L10.7 313.8C21.3 306.7 42.7 292.3 64.2 284.5C85.7 276.7 107.3 275.3 128.8 275.3C150.3 275.3 171.7 276.7 193 276.8C214.3 277 235.7 276 257 279.2C278.3 282.3 299.7 289.7 321.2 289.3C342.7 289 364.3 281 385.8 283.3C407.3 285.7 428.7 298.3 450 299.5C471.3 300.7 492.7 290.3 514.2 292.2C535.7 294 557.3 308 578.8 315.3C600.3 322.7 621.7 323.3 643 324.3C664.3 325.3 685.7 326.7 707 321.7C728.3 316.7 749.7 305.3 771.2 298.3C792.7 291.3 814.3 288.7 835.8 286C857.3 283.3 878.7 280.7 889.3 279.3L900 278L900 601L889.3 601C878.7 601 857.3 601 835.8 601C814.3 601 792.7 601 771.2 601C749.7 601 728.3 601 707 601C685.7 601 664.3 601 643 601C621.7 601 600.3 601 578.8 601C557.3 601 535.7 601 514.2 601C492.7 601 471.3 601 450 601C428.7 601 407.3 601 385.8 601C364.3 601 342.7 601 321.2 601C299.7 601 278.3 601 257 601C235.7 601 214.3 601 193 601C171.7 601 150.3 601 128.8 601C107.3 601 85.7 601 64.2 601C42.7 601 21.3 601 10.7 601L0 601Z"
              }
              pathB={
                "M0 285L10.7 291C21.3 297 42.7 309 64.2 308.2C85.7 307.3 107.3 293.7 128.8 289.2C150.3 284.7 171.7 289.3 193 296.7C214.3 304 235.7 314 257 319.2C278.3 324.3 299.7 324.7 321.2 318.8C342.7 313 364.3 301 385.8 293.8C407.3 286.7 428.7 284.3 450 287.5C471.3 290.7 492.7 299.3 514.2 305.7C535.7 312 557.3 316 578.8 315.5C600.3 315 621.7 310 643 304C664.3 298 685.7 291 707 292.3C728.3 293.7 749.7 303.3 771.2 305.3C792.7 307.3 814.3 301.7 835.8 302.3C857.3 303 878.7 310 889.3 313.5L900 317L900 601L889.3 601C878.7 601 857.3 601 835.8 601C814.3 601 792.7 601 771.2 601C749.7 601 728.3 601 707 601C685.7 601 664.3 601 643 601C621.7 601 600.3 601 578.8 601C557.3 601 535.7 601 514.2 601C492.7 601 471.3 601 450 601C428.7 601 407.3 601 385.8 601C364.3 601 342.7 601 321.2 601C299.7 601 278.3 601 257 601C235.7 601 214.3 601 193 601C171.7 601 150.3 601 128.8 601C107.3 601 85.7 601 64.2 601C42.7 601 21.3 601 10.7 601L0 601Z"
              }
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <SvgMorph
              width={windowSize?.width ?? 900}
              height={windowSize?.height ?? 600}
              duration={4000}
              fill={"#ff9a00"}
              pathA={
                "M0 347L10.7 341.5C21.3 336 42.7 325 64.2 325.5C85.7 326 107.3 338 128.8 343C150.3 348 171.7 346 193 344.8C214.3 343.7 235.7 343.3 257 337.8C278.3 332.3 299.7 321.7 321.2 318.5C342.7 315.3 364.3 319.7 385.8 320.3C407.3 321 428.7 318 450 319C471.3 320 492.7 325 514.2 324.2C535.7 323.3 557.3 316.7 578.8 321C600.3 325.3 621.7 340.7 643 342C664.3 343.3 685.7 330.7 707 324.8C728.3 319 749.7 320 771.2 323.8C792.7 327.7 814.3 334.3 835.8 339C857.3 343.7 878.7 346.3 889.3 347.7L900 349L900 601L889.3 601C878.7 601 857.3 601 835.8 601C814.3 601 792.7 601 771.2 601C749.7 601 728.3 601 707 601C685.7 601 664.3 601 643 601C621.7 601 600.3 601 578.8 601C557.3 601 535.7 601 514.2 601C492.7 601 471.3 601 450 601C428.7 601 407.3 601 385.8 601C364.3 601 342.7 601 321.2 601C299.7 601 278.3 601 257 601C235.7 601 214.3 601 193 601C171.7 601 150.3 601 128.8 601C107.3 601 85.7 601 64.2 601C42.7 601 21.3 601 10.7 601L0 601Z"
              }
              pathB={
                "M0 353L10.7 347.5C21.3 342 42.7 331 64.2 327.2C85.7 323.3 107.3 326.7 128.8 326.8C150.3 327 171.7 324 193 327.8C214.3 331.7 235.7 342.3 257 341.8C278.3 341.3 299.7 329.7 321.2 328C342.7 326.3 364.3 334.7 385.8 333.7C407.3 332.7 428.7 322.3 450 321.2C471.3 320 492.7 328 514.2 330.2C535.7 332.3 557.3 328.7 578.8 323.7C600.3 318.7 621.7 312.3 643 315.8C664.3 319.3 685.7 332.7 707 340C728.3 347.3 749.7 348.7 771.2 345.8C792.7 343 814.3 336 835.8 334.2C857.3 332.3 878.7 335.7 889.3 337.3L900 339L900 601L889.3 601C878.7 601 857.3 601 835.8 601C814.3 601 792.7 601 771.2 601C749.7 601 728.3 601 707 601C685.7 601 664.3 601 643 601C621.7 601 600.3 601 578.8 601C557.3 601 535.7 601 514.2 601C492.7 601 471.3 601 450 601C428.7 601 407.3 601 385.8 601C364.3 601 342.7 601 321.2 601C299.7 601 278.3 601 257 601C235.7 601 214.3 601 193 601C171.7 601 150.3 601 128.8 601C107.3 601 85.7 601 64.2 601C42.7 601 21.3 601 10.7 601L0 601Z"
              }
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.0}
            speed={0.01}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.h1
              className={styles.title}
              initial={{ translateY: 200, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "tween",
                duration: 2,
              }}
            >
              {S.allYouNeedToStartIs}
              <span className={styles.gradientHighlight}>{S.desire}</span>
            </motion.h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.6}>
            <SvgMorph
              width={windowSize?.width ?? 900}
              height={windowSize?.height ?? 600}
              duration={3000}
              fill={"#ff8900"}
              pathA={
                "M0 390L10.7 391C21.3 392 42.7 394 64.2 396.5C85.7 399 107.3 402 128.8 400C150.3 398 171.7 391 193 390.3C214.3 389.7 235.7 395.3 257 397C278.3 398.7 299.7 396.3 321.2 393.8C342.7 391.3 364.3 388.7 385.8 386.8C407.3 385 428.7 384 450 382C471.3 380 492.7 377 514.2 378.8C535.7 380.7 557.3 387.3 578.8 390.5C600.3 393.7 621.7 393.3 643 394C664.3 394.7 685.7 396.3 707 397.8C728.3 399.3 749.7 400.7 771.2 399.7C792.7 398.7 814.3 395.3 835.8 396.5C857.3 397.7 878.7 403.3 889.3 406.2L900 409L900 601L889.3 601C878.7 601 857.3 601 835.8 601C814.3 601 792.7 601 771.2 601C749.7 601 728.3 601 707 601C685.7 601 664.3 601 643 601C621.7 601 600.3 601 578.8 601C557.3 601 535.7 601 514.2 601C492.7 601 471.3 601 450 601C428.7 601 407.3 601 385.8 601C364.3 601 342.7 601 321.2 601C299.7 601 278.3 601 257 601C235.7 601 214.3 601 193 601C171.7 601 150.3 601 128.8 601C107.3 601 85.7 601 64.2 601C42.7 601 21.3 601 10.7 601L0 601Z"
              }
              pathB={
                "M0 381L10.7 381.3C21.3 381.7 42.7 382.3 64.2 384C85.7 385.7 107.3 388.3 128.8 386.7C150.3 385 171.7 379 193 380.5C214.3 382 235.7 391 257 391.8C278.3 392.7 299.7 385.3 321.2 386.2C342.7 387 364.3 396 385.8 398.7C407.3 401.3 428.7 397.7 450 398C471.3 398.3 492.7 402.7 514.2 401.3C535.7 400 557.3 393 578.8 387.5C600.3 382 621.7 378 643 376.3C664.3 374.7 685.7 375.3 707 375.7C728.3 376 749.7 376 771.2 380.2C792.7 384.3 814.3 392.7 835.8 396.3C857.3 400 878.7 399 889.3 398.5L900 398L900 601L889.3 601C878.7 601 857.3 601 835.8 601C814.3 601 792.7 601 771.2 601C749.7 601 728.3 601 707 601C685.7 601 664.3 601 643 601C621.7 601 600.3 601 578.8 601C557.3 601 535.7 601 514.2 601C492.7 601 471.3 601 450 601C428.7 601 407.3 601 385.8 601C364.3 601 342.7 601 321.2 601C299.7 601 278.3 601 257 601C235.7 601 214.3 601 193 601C171.7 601 150.3 601 128.8 601C107.3 601 85.7 601 64.2 601C42.7 601 21.3 601 10.7 601L0 601Z"
              }
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.8}>
            <SvgMorph
              width={windowSize?.width ?? 900}
              height={windowSize?.height ?? 600}
              duration={2000}
              fill={"#ff7900"}
              pathA={
                "M0 458L10 457.2C20 456.3 40 454.7 60 452.3C80 450 100 447 120 446.8C140 446.7 160 449.3 180 449.8C200 450.3 220 448.7 240 446.2C260 443.7 280 440.3 300 443.2C320 446 340 455 360 456.5C380 458 400 452 420 450.3C440 448.7 460 451.3 480 452.3C500 453.3 520 452.7 540 452.3C560 452 580 452 600 453.8C620 455.7 640 459.3 660 456.5C680 453.7 700 444.3 720 443.5C740 442.7 760 450.3 780 453C800 455.7 820 453.3 840 454.3C860 455.3 880 459.7 890 461.8L900 464L900 601L890 601C880 601 860 601 840 601C820 601 800 601 780 601C760 601 740 601 720 601C700 601 680 601 660 601C640 601 620 601 600 601C580 601 560 601 540 601C520 601 500 601 480 601C460 601 440 601 420 601C400 601 380 601 360 601C340 601 320 601 300 601C280 601 260 601 240 601C220 601 200 601 180 601C160 601 140 601 120 601C100 601 80 601 60 601C40 601 20 601 10 601L0 601Z"
              }
              pathB={
                "M0 447L10 448.7C20 450.3 40 453.7 60 453C80 452.3 100 447.7 120 445.5C140 443.3 160 443.7 180 447.2C200 450.7 220 457.3 240 457.3C260 457.3 280 450.7 300 446.8C320 443 340 442 360 444.8C380 447.7 400 454.3 420 454.8C440 455.3 460 449.7 480 445.7C500 441.7 520 439.3 540 441.2C560 443 580 449 600 449C620 449 640 443 660 439.8C680 436.7 700 436.3 720 437.2C740 438 760 440 780 443.7C800 447.3 820 452.7 840 452.7C860 452.7 880 447.3 890 444.7L900 442L900 601L890 601C880 601 860 601 840 601C820 601 800 601 780 601C760 601 740 601 720 601C700 601 680 601 660 601C640 601 620 601 600 601C580 601 560 601 540 601C520 601 500 601 480 601C460 601 440 601 420 601C400 601 380 601 360 601C340 601 320 601 300 601C280 601 260 601 240 601C220 601 200 601 180 601C160 601 140 601 120 601C100 601 80 601 60 601C40 601 20 601 10 601L0 601Z"
              }
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1}>
            <SvgMorph
              width={windowSize?.width ?? 900}
              height={windowSize?.height ?? 600}
              duration={1000}
              fill={"#ff6800"}
              pathA={
                "M0 511L9.3 509.3C18.7 507.7 37.3 504.3 56.2 504.5C75 504.7 94 508.3 112.8 511C131.7 513.7 150.3 515.3 169 516C187.7 516.7 206.3 516.3 225 514.2C243.7 512 262.3 508 281.2 505.8C300 503.7 319 503.3 337.8 505.3C356.7 507.3 375.3 511.7 394 511.8C412.7 512 431.3 508 450 505.3C468.7 502.7 487.3 501.3 506.2 501.5C525 501.7 544 503.3 562.8 505.5C581.7 507.7 600.3 510.3 619 510.2C637.7 510 656.3 507 675 507C693.7 507 712.3 510 731.2 511.8C750 513.7 769 514.3 787.8 512.5C806.7 510.7 825.3 506.3 844 505.7C862.7 505 881.3 508 890.7 509.5L900 511L900 601L890.7 601C881.3 601 862.7 601 844 601C825.3 601 806.7 601 787.8 601C769 601 750 601 731.2 601C712.3 601 693.7 601 675 601C656.3 601 637.7 601 619 601C600.3 601 581.7 601 562.8 601C544 601 525 601 506.2 601C487.3 601 468.7 601 450 601C431.3 601 412.7 601 394 601C375.3 601 356.7 601 337.8 601C319 601 300 601 281.2 601C262.3 601 243.7 601 225 601C206.3 601 187.7 601 169 601C150.3 601 131.7 601 112.8 601C94 601 75 601 56.2 601C37.3 601 18.7 601 9.3 601L0 601Z"
              }
              pathB={
                "M0 511L9.3 509.7C18.7 508.3 37.3 505.7 56.2 502.8C75 500 94 497 112.8 496.8C131.7 496.7 150.3 499.3 169 503.8C187.7 508.3 206.3 514.7 225 518.7C243.7 522.7 262.3 524.3 281.2 520.5C300 516.7 319 507.3 337.8 505.7C356.7 504 375.3 510 394 513.2C412.7 516.3 431.3 516.7 450 512.8C468.7 509 487.3 501 506.2 501.8C525 502.7 544 512.3 562.8 517C581.7 521.7 600.3 521.3 619 518.7C637.7 516 656.3 511 675 507.2C693.7 503.3 712.3 500.7 731.2 502C750 503.3 769 508.7 787.8 512.3C806.7 516 825.3 518 844 519.7C862.7 521.3 881.3 522.7 890.7 523.3L900 524L900 601L890.7 601C881.3 601 862.7 601 844 601C825.3 601 806.7 601 787.8 601C769 601 750 601 731.2 601C712.3 601 693.7 601 675 601C656.3 601 637.7 601 619 601C600.3 601 581.7 601 562.8 601C544 601 525 601 506.2 601C487.3 601 468.7 601 450 601C431.3 601 412.7 601 394 601C375.3 601 356.7 601 337.8 601C319 601 300 601 281.2 601C262.3 601 243.7 601 225 601C206.3 601 187.7 601 169 601C150.3 601 131.7 601 112.8 601C94 601 75 601 56.2 601C37.3 601 18.7 601 9.3 601L0 601Z"
              }
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.9}
            speed={1}
            style={{ background: "var(--orange)" }}
          ></ParallaxLayer>

          {/* Page 2 */}
        </Parallax>
      </main>
    </>
  );
};

export default Welcome;

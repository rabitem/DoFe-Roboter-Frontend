import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import PreviewCard from "./cards/PreviewCard";
import DevTimeline from "./DevTimeline";
import ArticleModal from "./modals/ArticleModal";

export default function HeadingPreview() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => setOpenModal(!openModal);

  const [modalContent, setModalContent] = React.useState({
    header: "",
    description: "",
  });

  const handleModalProject = () => {
    setModalContent({
      header: "Project",
      description:
        "That's not the judgment we need. This country of ours has more wealth than any nation, but that's not what makes us rich. This is a difficult responsibility to embrace. God bless you.",
    });
    handleModal();
  };

  const handleModalAbout = () => {
    setModalContent({
      header: "About",
      description: (
        <div>
          <img
            src="https://tubestatic.orf.at/static/images/site/tube/20201042/unbenannt-1.5943282.jpg"
            alt="profile"
            loading="lazy"
          />
        </div>
      ),
    });
    handleModal();
  };

  const handleModalTimeline = () => {
    setModalContent({
      header: "Timeline",
      description: <DevTimeline />,
    });
    handleModal();
  };

  return (
    <div>
      <ArticleModal
        state={openModal}
        updateState={handleModal}
        header={modalContent.header}
        description={modalContent.description}
      />

      <Grid
        px={{ xs: 1, sm: 2, md: 8 }}
        mb={3}
        container
        direction="row"
        justifyContent="space-around"
        columnSpacing={8}
        rowSpacing={2}
      >
        <Grid item sm={12} md={6} lg={4}>
          <PreviewCard
            subHeader="Project"
            mainHeader="Lego Mindstorms Plotter"
            lastUpdated="Last updated: 08.01.2022"
            description={
              <Typography variant="body-2">
                The project of this website is based on a Lego Mindstorms robot,
                which was converted to a plotter according to the instructions
                of&nbsp;
                <Link
                  href="http://www.jander.me.uk/LEGO/plott3r.html"
                  underline="hover"
                >
                  Jerry Nicholls
                </Link>
                . Afterwards, with the help of a Java backend, an SVG parser was
                built, which enables the printing of SVG files via the REST
                interface. Finally some nice functionalities were built around
                this basic requirement.
              </Typography>
            }
            updateState={handleModalProject}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <PreviewCard
            subHeader="About"
            mainHeader="Developer Stories"
            lastUpdated="Last updated: 08.01.2022"
            description={
              <Typography variant="body-2">
                Did I know him to be an occasionally fierce critic of American
                domestic and foreign policy? Of course. More of you have lost
                your homes and even more are watching your home values plummet.
                And today, as my call for a time frame to remove our troops from
                Iraq has been echoed by the Iraqi government and even the Bush
                Administration, even after we learned that Iraq has a $79
                billion surplus while we're wallowing in deficits, John McCain
                stands alone in his stubborn refusal to end a misguided war. Too
                many tears have flowed. Thank you, God Bless you, and God Bless
                the United States of America.
              </Typography>
            }
            updateState={handleModalAbout}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <PreviewCard
            subHeader="Timeline"
            mainHeader="Development: A short timeline"
            lastUpdated="Last updated: 10.01.2022"
            description={
              <Typography variant="body-2">
                I was too young to be involved in that movement, but I felt I
                could play a small part in the continuing battle for justice by
                helping rebuild some of Chicago's poorest neighborhoods. And
                when innocents in Bosnia and Darfur are slaughtered, that is a
                stain on our collective conscience. For human history has often
                been a record of nations and tribes subjugating one another to
                serve their own interests. And today I am announcing a new
                global effort with the Organization of the Islamic Conference to
                eradicate polio. But if we choose to be bound by the past, we
                will never move forward. God bless you.
              </Typography>
            }
            updateState={handleModalTimeline}
          />
        </Grid>
      </Grid>
    </div>
  );
}

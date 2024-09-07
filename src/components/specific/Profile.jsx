import { Avatar, Stack, Typography, Box, useMediaQuery } from "@mui/material";
import React from "react";
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  // Responsive handling
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        padding: isSmallScreen ? "1rem" : "1rem",
        borderRadius: "20px",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
        width: "100%",
        height: "100%",
        color: "white",
        textAlign: "center",
      }}
    >
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
          sx={{
            width: isSmallScreen ? 150 : 200,
            height: isSmallScreen ? 150 : 200,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          }}
          src={transformImage(user?.avatar?.url)}
        />
        <ProfileCard heading={"Bio"} text={user?.bio} />
        <ProfileCard heading={"Username"} text={user?.username} Icon={<UserNameIcon />} />
        <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} />
        <ProfileCard heading={"Joined"} text={moment(user?.createdAt).fromNow()} Icon={<CalendarIcon />} />
      </Stack>
    </Box>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      padding: "1rem",
      borderRadius: "10px",
      width: "100%",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  >
    {Icon && (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
        }}
      >
        {Icon}
      </Box>
    )}
    <Stack>
      <Typography variant="body1" color="white" sx={{ fontWeight: "bold" }}>
        {text || "N/A"}
      </Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;

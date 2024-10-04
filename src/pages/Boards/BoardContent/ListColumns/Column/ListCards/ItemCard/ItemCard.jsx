//ItemCard
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import CommentIcon from "@mui/icons-material/Comment";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

export default function ItemCard({ showImageCard, itemCard, indexCard, listeners }) {
    const isShowCardActions =
        !!itemCard?.memberIds.length ||
        !!itemCard?.comments.length ||
        !!itemCard?.attachments.length;
    return (
        <Card
            sx={{
                cursor: "pointer",
                margin: indexCard === 0 ? "0 0 10px 0" : "10px 0",
            }}
            {...listeners}
        >
            <CardContent
                sx={{
                    boxShadow: showImageCard
                        ? "none"
                        : "1px 1px rgba(0, 0, 0, 0.2)",
                    "&:last-child": showImageCard ? { p: 0 } : { p: 1.5 },
                }}
            >
                {showImageCard && (
                    <CardMedia
                        component="img"
                        height="194"
                        image={itemCard?.cover}
                        alt="Paella dish"
                        sx={{
                            borderTopRightRadius: "4px",
                            borderTopLeftRadius: "4px",
                            objectFit: "fill",
                        }}
                    />
                )}
                <Typography
                    paragraph
                    sx={{
                        padding: showImageCard && "10px 10px 0 10px",
                        margin: 0,
                    }}
                >
                    {itemCard?.title}
                </Typography>
                {isShowCardActions && (
                    <CardActions sx={{ padding: "8px 0" }}>
                        <Button
                            size="small"
                            startIcon={<PeopleIcon />}
                            sx={{ color: "#0586fa" }}
                        >
                            {itemCard?.memberIds.length}
                        </Button>
                        <Button
                            size="small"
                            startIcon={<CommentIcon />}
                            sx={{ color: "#0586fa" }}
                        >
                            {itemCard?.comments.length}
                        </Button>
                        <Button
                            size="small"
                            startIcon={<InsertLinkIcon />}
                            sx={{ color: "#0586fa" }}
                        >
                            {itemCard?.attachments.length}
                        </Button>
                    </CardActions>
                )}
            </CardContent>
        </Card>
    );
}
